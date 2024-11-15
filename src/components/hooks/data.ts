import { createClient } from "@/utils/supabase/client";
import { useUser } from "@supabase/auth-helpers-react";
import { useInfiniteQuery, useQuery } from "react-query";

export function usePlayer() {
  const supabase = createClient();
  return useQuery("player", async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();
    return data;
  });
}

export function useSports() {
  const supabase = createClient();
  const player = usePlayer();
  const isAuthed = !!player.data?.id;

  return useQuery(
    "sports",
    async () => {
      const { data } = await supabase.from("sports").select("*");

      return data;
    },
    { enabled: isAuthed }
  );
}

export function useLocations() {
  const supabase = createClient();
  const player = usePlayer();
  const isAuthed = !!player.data?.id;

  return useQuery(
    "locations",
    async () => {
      const { data } = await supabase.from("locations").select("*");

      return data;
    },
    { enabled: isAuthed }
  );
}

export function useFields() {
  const supabase = createClient();
  const player = usePlayer();
  const isAuthed = !!player.data?.id;

  return useQuery(
    "fields",
    async () => {
      const { data } = await supabase.from("fields").select("*");

      return data;
    },
    { enabled: isAuthed }
  );
}
