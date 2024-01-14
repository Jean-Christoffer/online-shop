import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl =  process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabaseDevKey = process.env.SUPABASE_DEV_KEY
const supabase = createClient(supabaseUrl, supabaseDevKey)

export default supabase