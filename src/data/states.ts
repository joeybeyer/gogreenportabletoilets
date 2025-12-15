import { supabase } from '../lib/supabase';

export interface State {
  id: string;
  name: string;
  code: string;
  description: string;
  cities_count: number;
  created_at: string;
  updated_at: string;
}

export async function getAllStates(): Promise<State[]> {
  const { data, error } = await supabase
    .from('states')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching states:', error);
    return [];
  }

  return data || [];
}

export async function getStateByCode(code: string): Promise<State | null> {
  const { data, error } = await supabase
    .from('states')
    .select('*')
    .eq('code', code)
    .maybeSingle();

  if (error) {
    console.error('Error fetching state:', error);
    return null;
  }

  return data;
}

export async function updateStateCitiesCount(stateId: string): Promise<void> {
  const { count } = await supabase
    .from('cities')
    .select('*', { count: 'exact', head: true })
    .eq('state_id', stateId);

  if (count !== null) {
    await supabase
      .from('states')
      .update({ cities_count: count })
      .eq('id', stateId);
  }
}
