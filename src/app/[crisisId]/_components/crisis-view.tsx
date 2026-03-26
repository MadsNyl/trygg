"use client";

import { useState } from "react";

import { CrisisNotification } from "./crisis-notification";
import { CrisisDetail } from "./crisis-detail";

import type { CrisisDetailData } from "./types";

export function CrisisView({ crisis }: { crisis: CrisisDetailData }) {
  const [showDetail, setShowDetail] = useState(false);

  if (!showDetail) {
    return (
      <CrisisNotification
        crisis={crisis}
        onReadMore={() => setShowDetail(true)}
      />
    );
  }

  return <CrisisDetail crisis={crisis} />;
}
