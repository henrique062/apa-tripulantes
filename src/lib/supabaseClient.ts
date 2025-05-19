
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tybdysmxmxzwebaooeqj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5YmR5c214bXh6d2ViYW9vZXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNTM1ODMsImV4cCI6MjA2MTYyOTU4M30.dUWztXi4iaX-aRQzTnavsKUsxde0KZtWgZ03lhP07sc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
