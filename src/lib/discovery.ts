import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GAMES, LABS } from "@/lib/content/catalog";
import { CURATED_NEWS } from "@/lib/content/news";
import { pickRandom } from "@/lib/daily";

const KINDS = ["quote", "tip", "fact", "concept", "lab", "game", "news", "question"] as const;

/** Sends the visitor somewhere they did not ask for. That unpredictability is the point. */
export function useRandomDiscovery() {
  const navigate = useNavigate();
  return useCallback(() => {
    const kind = pickRandom([...KINDS]);
    switch (kind) {
      case "lab":
        return navigate(`/lab/${pickRandom(LABS).id}`);
      case "game":
        return navigate(`/game/${pickRandom(GAMES).id}`);
      case "news":
        return navigate(`/news/${pickRandom(CURATED_NEWS).id}`);
      case "question":
        return navigate("/game/quiz");
      default:
        return navigate(`/explore?kind=${kind}&shuffle=${Date.now()}`);
    }
  }, [navigate]);
}
