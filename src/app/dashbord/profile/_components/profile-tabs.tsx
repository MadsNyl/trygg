"use client";

import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  SecurityLockIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

import { ProfileTab } from "./profile-tab";
import { SecurityTab } from "./security-tab";
import { MembershipTab } from "./membership-tab";

type Tab = "profil" | "sikkerhet" | "medlemskap";

type EtatData = {
  id: string;
  title: string;
  themeColor: string;
  contactEmail: string;
  contactPhone: string;
};

type ProfileData = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  isVerified: boolean;
  isAdmin: boolean;
  createdAt: Date;
  etater: EtatData[];
};

type SessionData = {
  id: string;
  token: string;
  ipAddress: string | null;
  userAgent: string | null;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

const tabs: { id: Tab; label: string; icon: typeof UserIcon }[] = [
  { id: "profil", label: "Profil", icon: UserIcon },
  { id: "sikkerhet", label: "Sikkerhet", icon: SecurityLockIcon },
  { id: "medlemskap", label: "Medlemskap", icon: UserGroupIcon },
];

export function ProfileTabs({
  profile,
  sessions,
  currentSessionToken,
}: {
  profile: ProfileData;
  sessions: SessionData[];
  currentSessionToken: string;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("profil");

  return (
    <div>
      <nav
        role="tablist"
        aria-label="Profilinnstillinger"
        className="bg-muted mb-8 flex gap-1 rounded-lg p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <HugeiconsIcon icon={tab.icon} size={16} />
            {tab.label}
          </button>
        ))}
      </nav>

      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeTab === "profil" && <ProfileTab profile={profile} />}
        {activeTab === "sikkerhet" && (
          <SecurityTab
            profile={profile}
            sessions={sessions}
            currentSessionToken={currentSessionToken}
          />
        )}
        {activeTab === "medlemskap" && (
          <MembershipTab etater={profile.etater} />
        )}
      </div>
    </div>
  );
}
