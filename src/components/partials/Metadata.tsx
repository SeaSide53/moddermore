import { BoxIcon, Clock10Icon, GlobeIcon, HeartIcon, LockIcon, ShieldIcon } from "lucide-react";
import { loaderFormat } from "~/lib/strings";

import type { ModList, ModListWithExtraData } from "~/types/moddermore";

export const Metadata = ({ data }: { data: ModList | ModListWithExtraData }) => {
  return (
    <div className="metadata">
      <div>
        <BoxIcon className="block h-4 w-4" />
        <span>
          For Minecraft <strong>{data.gameVersion}</strong> with{" "}
          <strong>{loaderFormat(data.modloader)}</strong>
        </span>
      </div>
      <div>
        <Clock10Icon className="block h-4 w-4" />
        <span>
          Created <strong>{new Date(data.created_at).toDateString()}</strong>
        </span>
      </div>

      {"likes" in data && (
        <div>
          <HeartIcon className="block h-4 w-4" />
          <span>
            <strong>{data.likes}</strong> {data.likes === 1 ? "like" : "likes"}
          </span>
        </div>
      )}

      <div>
        {data.visibility === "public" ? (
          <GlobeIcon className="block h-4 w-4" />
        ) : data.visibility === "unlisted" ? (
          <ShieldIcon className="block h-4 w-4" />
        ) : (
          <LockIcon className="block h-4 w-4" />
        )}
        <strong>{data.visibility[0].toUpperCase() + data.visibility.slice(1)}</strong>
      </div>
    </div>
  );
};
