-- =========================================================
-- CASEFILE: Supabase PostgreSQL Schema & Security Policies
-- =========================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Mystery Categories Table
CREATE TABLE IF NOT EXISTS mystery_categories (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Profiles Table (Linked to auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL UNIQUE,
  avatar_seed TEXT DEFAULT 'default',
  rank TEXT NOT NULL DEFAULT 'Rookie',
  xp INTEGER NOT NULL DEFAULT 0,
  cases_solved INTEGER NOT NULL DEFAULT 0,
  cases_attempted INTEGER NOT NULL DEFAULT 0,
  success_rate INTEGER NOT NULL DEFAULT 0,
  evidence_analyzed INTEGER NOT NULL DEFAULT 0,
  hints_used INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 0,
  favorite_category TEXT DEFAULT 'Crime & Detective',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Admin Users
CREATE TABLE IF NOT EXISTS admin_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'editor',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Mysteries Table
CREATE TABLE IF NOT EXISTS mysteries (
  id TEXT PRIMARY KEY,
  case_number TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL REFERENCES mystery_categories(id),
  difficulty INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
  difficulty_label TEXT NOT NULL,
  estimated_time TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_story TEXT NOT NULL,
  setting TEXT NOT NULL,
  disclaimer TEXT,
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Suspects Table
CREATE TABLE IF NOT EXISTS suspects (
  id TEXT PRIMARY KEY,
  mystery_id TEXT NOT NULL REFERENCES mysteries(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  occupation TEXT NOT NULL,
  relation_to_case TEXT NOT NULL,
  alibi TEXT NOT NULL,
  motive TEXT NOT NULL,
  known_facts TEXT[] NOT NULL DEFAULT '{}',
  statement TEXT NOT NULL,
  avatar_seed TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Evidence Table
CREATE TABLE IF NOT EXISTS evidence (
  id TEXT PRIMARY KEY,
  mystery_id TEXT NOT NULL REFERENCES mysteries(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('physical', 'document', 'digital', 'visual')),
  category TEXT NOT NULL,
  collected_at TEXT NOT NULL,
  location_found TEXT NOT NULL,
  summary TEXT NOT NULL,
  detailed_content TEXT NOT NULL,
  metadata JSONB,
  hotspots JSONB,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Timeline Events
CREATE TABLE IF NOT EXISTS timeline_events (
  id TEXT PRIMARY KEY,
  mystery_id TEXT NOT NULL REFERENCES mysteries(id) ON DELETE CASCADE,
  time TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  related_suspect_id TEXT REFERENCES suspects(id),
  is_initially_locked BOOLEAN DEFAULT FALSE,
  unlock_note TEXT
);

-- 9. Witness Statements
CREATE TABLE IF NOT EXISTS witness_statements (
  id TEXT PRIMARY KEY,
  mystery_id TEXT NOT NULL REFERENCES mysteries(id) ON DELETE CASCADE,
  witness_name TEXT NOT NULL,
  role TEXT NOT NULL,
  interview_time TEXT NOT NULL,
  statement TEXT NOT NULL,
  contradiction_hint TEXT
);

-- 10. Mystery Hints
CREATE TABLE IF NOT EXISTS mystery_hints (
  id TEXT PRIMARY KEY,
  mystery_id TEXT NOT NULL REFERENCES mysteries(id) ON DELETE CASCADE,
  level INTEGER NOT NULL CHECK (level IN (1, 2, 3)),
  title TEXT NOT NULL,
  text TEXT NOT NULL,
  score_penalty INTEGER NOT NULL DEFAULT 200
);

-- 11. Mystery Solutions
CREATE TABLE IF NOT EXISTS mystery_solutions (
  mystery_id TEXT PRIMARY KEY REFERENCES mysteries(id) ON DELETE CASCADE,
  culprit_id TEXT NOT NULL REFERENCES suspects(id),
  method_id TEXT NOT NULL,
  motive_id TEXT NOT NULL,
  critical_evidence_ids TEXT[] NOT NULL,
  method_options JSONB NOT NULL,
  motive_options JSONB NOT NULL,
  full_explanation JSONB NOT NULL
);

-- 12. User Progress
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  mystery_id TEXT NOT NULL REFERENCES mysteries(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'unsolved' CHECK (status IN ('unsolved', 'in_progress', 'solved', 'failed')),
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  hints_revealed_count INTEGER DEFAULT 0,
  notes TEXT DEFAULT '',
  suspect_statuses JSONB DEFAULT '{}',
  pinned_evidence_ids TEXT[] DEFAULT '{}',
  suspicious_evidence_ids TEXT[] DEFAULT '{}',
  UNIQUE(user_id, mystery_id)
);

-- 13. Case Attempts Log
CREATE TABLE IF NOT EXISTS case_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  mystery_id TEXT NOT NULL REFERENCES mysteries(id) ON DELETE CASCADE,
  solved_at TIMESTAMPTZ DEFAULT NOW(),
  duration_minutes INTEGER NOT NULL,
  accuracy_percentage INTEGER NOT NULL,
  score INTEGER NOT NULL,
  hints_used INTEGER NOT NULL,
  culprit_correct BOOLEAN NOT NULL,
  method_correct BOOLEAN NOT NULL,
  motive_correct BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. User Achievements
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL,
  unlocked_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE mysteries ENABLE ROW LEVEL SECURITY;
ALTER TABLE suspects ENABLE ROW LEVEL SECURITY;
ALTER TABLE evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE witness_statements ENABLE ROW LEVEL SECURITY;
ALTER TABLE mystery_hints ENABLE ROW LEVEL SECURITY;
ALTER TABLE mystery_solutions ENABLE ROW LEVEL SECURITY;

-- Public Read Policies for Game Data
CREATE POLICY "Public mysteries viewable by everyone" ON mysteries FOR SELECT USING (is_published = true);
CREATE POLICY "Public suspects viewable by everyone" ON suspects FOR SELECT USING (true);
CREATE POLICY "Public evidence viewable by everyone" ON evidence FOR SELECT USING (true);
CREATE POLICY "Public timeline viewable by everyone" ON timeline_events FOR SELECT USING (true);
CREATE POLICY "Public witnesses viewable by everyone" ON witness_statements FOR SELECT USING (true);
CREATE POLICY "Public hints viewable by everyone" ON mystery_hints FOR SELECT USING (true);

-- User Isolation Policies
CREATE POLICY "Users can view and edit own profile" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users can view and edit own progress" ON user_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view and insert own attempts" ON case_attempts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view and insert own achievements" ON user_achievements FOR ALL USING (auth.uid() = user_id);
