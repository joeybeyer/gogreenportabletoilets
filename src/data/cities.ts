import { supabase } from '../lib/supabase';

export interface City {
  id: string;
  name: string;
  slug: string;
  state_id: string;
  state_code: string;
  population: number;
  description: string;
  meta_title: string;
  meta_description: string;
  created_at: string;
  updated_at: string;
}

export interface CityWithState extends City {
  state_name: string;
}

export async function getAllCities(): Promise<CityWithState[]> {
  const { data, error } = await supabase
    .from('cities')
    .select(`
      *,
      states!inner(name)
    `)
    .order('name');

  if (error) {
    console.error('Error fetching cities:', error);
    return [];
  }

  return (data || []).map(city => ({
    ...city,
    state_name: city.states?.name || ''
  }));
}

export async function getCityBySlug(slug: string): Promise<CityWithState | null> {
  const { data, error } = await supabase
    .from('cities')
    .select(`
      *,
      states!inner(name)
    `)
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    console.error('Error fetching city:', error);
    return null;
  }

  if (!data) {
    return null;
  }

  return {
    ...data,
    state_name: data.states?.name || ''
  };
}

export async function getCitiesByState(stateCode: string): Promise<City[]> {
  const { data, error } = await supabase
    .from('cities')
    .select('*')
    .eq('state_code', stateCode)
    .order('name');

  if (error) {
    console.error('Error fetching cities by state:', error);
    return [];
  }

  return data || [];
}

export async function searchCities(query: string): Promise<CityWithState[]> {
  const { data, error } = await supabase
    .from('cities')
    .select(`
      *,
      states!inner(name)
    `)
    .ilike('name', `%${query}%`)
    .order('population', { ascending: false })
    .limit(10);

  if (error) {
    console.error('Error searching cities:', error);
    return [];
  }

  return (data || []).map(city => ({
    ...city,
    state_name: city.states?.name || ''
  }));
}
