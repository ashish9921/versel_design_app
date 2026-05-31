
ALTER TABLE public.projects
  ADD COLUMN area TEXT,
  ADD COLUMN timeline TEXT,
  ADD COLUMN style TEXT,
  ADD COLUMN budget TEXT,
  ADD COLUMN before_image_url TEXT,
  ADD COLUMN cs_client_requirement TEXT,
  ADD COLUMN cs_design_approach TEXT,
  ADD COLUMN cs_materials TEXT,
  ADD COLUMN cs_outcome TEXT;
