CREATE TABLE public.daily_drops (
  day date PRIMARY KEY,
  payload jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.daily_drops TO anon;
GRANT SELECT ON public.daily_drops TO authenticated;
GRANT ALL ON public.daily_drops TO service_role;
ALTER TABLE public.daily_drops ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Daily drops are public to read" ON public.daily_drops FOR SELECT TO anon, authenticated USING (true);