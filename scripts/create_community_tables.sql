-- Create posts table
CREATE TABLE IF NOT EXISTS community_posts (
  id TEXT PRIMARY KEY DEFAULT 'p' || to_char(now(), 'YYYYMMDDHH24MISSUS') || floor(random()*1000)::text,
  author TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('question', 'reflection', 'tafsir', 'sunnah', 'general')),
  body TEXT NOT NULL,
  timestamp BIGINT NOT NULL DEFAULT EXTRACT(EPOCH FROM now())::BIGINT * 1000,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create likes table
CREATE TABLE IF NOT EXISTS community_likes (
  id BIGSERIAL PRIMARY KEY,
  post_id TEXT NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(post_id, user_id)
);

-- Create replies table
CREATE TABLE IF NOT EXISTS community_replies (
  id TEXT PRIMARY KEY DEFAULT 'r' || to_char(now(), 'YYYYMMDDHH24MISSUS') || floor(random()*1000)::text,
  post_id TEXT NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
  author TEXT NOT NULL DEFAULT 'Anonymous',
  text TEXT NOT NULL,
  time BIGINT NOT NULL DEFAULT EXTRACT(EPOCH FROM now())::BIGINT * 1000,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX idx_posts_timestamp ON community_posts(timestamp DESC);
CREATE INDEX idx_posts_category ON community_posts(category);
CREATE INDEX idx_likes_post_id ON community_likes(post_id);
CREATE INDEX idx_replies_post_id ON community_replies(post_id);

-- Enable Row Level Security
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_replies ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Posts are readable by everyone" ON community_posts
  FOR SELECT USING (true);

CREATE POLICY "Likes are readable by everyone" ON community_likes
  FOR SELECT USING (true);

CREATE POLICY "Replies are readable by everyone" ON community_replies
  FOR SELECT USING (true);

-- Create policies for public write access (anyone can post, like, reply)
CREATE POLICY "Anyone can insert posts" ON community_posts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can insert likes" ON community_likes
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can delete their own likes" ON community_likes
  FOR DELETE USING (true);

CREATE POLICY "Anyone can insert replies" ON community_replies
  FOR INSERT WITH CHECK (true);
