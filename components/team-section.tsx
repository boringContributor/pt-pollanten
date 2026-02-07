import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import type { TeamMember } from "@/lib/graphql";

export function TeamSection({ members }: { members: TeamMember[] }) {
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
          {members.map((member) => (
            <Card
              key={member.id}
              className="text-center transition-shadow hover:shadow-lg"
            >
              <CardHeader className="items-center pb-2">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm font-medium text-primary">
                  {member.role}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
