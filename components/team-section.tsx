import Image from "next/image";
import { User } from "lucide-react";
import type { TeamMember } from "@/lib/graphql";

export function TeamSection({ members }: { members: TeamMember[] }) {
  if (members.length === 0) return null;

  return (
    <section id="team" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-4xl">
          Unser Team
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Kompetent, einfühlsam und engagiert — lernen Sie unser Team kennen.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              {member.portrait ? (
                <div className="relative aspect-3/4 w-full overflow-hidden">
                  <Image
                    src={member.portrait.url}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-3/4 w-full items-center justify-center bg-primary/5">
                  <User className="h-20 w-20 text-primary/30" />
                </div>
              )}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
