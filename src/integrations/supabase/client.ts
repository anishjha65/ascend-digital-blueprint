// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uvgifioocoujpmcnvmfz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Z2lmaW9vY291anBtY252bWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3OTgwODcsImV4cCI6MjA2NDM3NDA4N30.t3b52bih8QZlwXWKv73ROe7xEbf9_pfdRiLKgmTwsOE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);