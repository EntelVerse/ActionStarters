"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, Trophy, Users, Info, Lock, Globe } from "lucide-react";
import {
  mockCompetitions,
  mockResearchAreas,
  ResearchCategories
} from "@/lib/data";

export default function CreateTeamPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Form state
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCompetition, setSelectedCompetition] = useState("");
  const [researchAreas, setResearchAreas] = useState<string[]>([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [maxMembers, setMaxMembers] = useState("5");
  const [inviteOnly, setInviteOnly] = useState(true);

  // Competitions by category for easier selection
  const competitionsByCategory: Record<string, typeof mockCompetitions> = {
    grants: mockCompetitions.filter(comp => comp.category === 'grants'),
    funding: mockCompetitions.filter(comp => comp.category === 'funding'),
    awards: mockCompetitions.filter(comp => comp.category === 'awards'),
  };

  // Error state
  const [error, setError] = useState("");

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!teamName.trim()) {
      setError("Team name is required");
      return;
    }

    if (!selectedCompetition) {
      setError("Please select a competition");
      return;
    }

    if (researchAreas.length === 0) {
      setError("Please select at least one research area");
      return;
    }

    setLoading(true);

    try {
      // In a real app, we would send this data to the server
      // For now, we'll just simulate a successful creation
      console.log({
        name: teamName,
        description,
        competitionId: selectedCompetition,
        researchAreas,
        private: isPrivate,
        maxMembers: parseInt(maxMembers),
        inviteOnly,
        ownerId: "user1", // Assuming the current user is user1
        status: "recruiting",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      // Success! Redirect to teams page
      setTimeout(() => {
        router.push("/teams");
      }, 1000);
    } catch (err) {
      setError("Failed to create team. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create a New Research Team</h1>
          <p className="text-gray-600">
            Form a team for a specific competition and invite researchers to collaborate on your research project.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-start mb-6">
            <AlertCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleCreateTeam}>
          <Card>
            <CardHeader>
              <CardTitle>Team Details</CardTitle>
              <CardDescription>
                Provide information about your team and the competition you're targeting.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Team Name */}
              <div className="space-y-2">
                <Label htmlFor="team-name">Team Name *</Label>
                <Input
                  id="team-name"
                  placeholder="Enter a name for your team"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              </div>

              {/* Team Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your team's focus and research goals"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="min-h-[120px]"
                />
              </div>

              {/* Competition */}
              <div className="space-y-2">
                <Label htmlFor="competition">Competition *</Label>
                <Select
                  value={selectedCompetition}
                  onValueChange={setSelectedCompetition}
                >
                  <SelectTrigger id="competition">
                    <SelectValue placeholder="Select a competition" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="max-h-[400px] overflow-y-auto">
                      {Object.entries(competitionsByCategory).map(([category, competitions]) => (
                        <div key={category} className="mb-2">
                          <div className="px-2 py-1.5 text-sm font-semibold text-gray-500 bg-gray-50">
                            {category.toUpperCase()}
                          </div>
                          {competitions.map(comp => (
                            <SelectItem key={comp.id} value={comp.id}>
                              <div className="max-w-md">
                                <div className="font-medium truncate">{comp.title}</div>
                                <div className="text-xs text-gray-500">
                                  {comp.organization} • Deadline: {comp.deadline}
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </div>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>

              {/* Research Areas */}
              <div className="space-y-3">
                <Label>Research Areas *</Label>
                <p className="text-sm text-gray-500">
                  Select the primary research areas relevant to your team's focus.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 max-h-[300px] overflow-y-auto p-1">
                  {ResearchCategories.map(category => (
                    <div key={category} className="mb-4">
                      <h4 className="text-sm font-medium mb-2">{category}</h4>
                      <div className="space-y-2">
                        {mockResearchAreas
                          .filter(area => area.category === category)
                          .map(area => (
                            <div key={area.id} className="flex items-center">
                              <Checkbox
                                id={area.id}
                                checked={researchAreas.includes(area.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setResearchAreas([...researchAreas, area.id]);
                                  } else {
                                    setResearchAreas(researchAreas.filter(id => id !== area.id));
                                  }
                                }}
                              />
                              <label htmlFor={area.id} className="ml-2 text-sm">
                                {area.name}
                              </label>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Settings */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium flex items-center">
                  <Info className="h-4 w-4 mr-2 text-blue-600" /> Team Settings
                </h3>

                {/* Private Team */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="private"
                    checked={isPrivate}
                    onCheckedChange={(checked) => setIsPrivate(!!checked)}
                  />
                  <div>
                    <label htmlFor="private" className="font-medium flex items-center">
                      <Lock className="h-4 w-4 mr-2" /> Private Team
                    </label>
                    <p className="text-sm text-gray-500">
                      Private teams are only visible to members and won't appear in search results.
                    </p>
                  </div>
                </div>

                {/* Invite Only */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="invite-only"
                    checked={inviteOnly}
                    onCheckedChange={(checked) => setInviteOnly(!!checked)}
                  />
                  <div>
                    <label htmlFor="invite-only" className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2" /> Invite Only
                    </label>
                    <p className="text-sm text-gray-500">
                      If disabled, researchers can request to join your team without an invitation.
                    </p>
                  </div>
                </div>

                {/* Max Members */}
                <div className="space-y-2">
                  <Label htmlFor="max-members">Maximum Team Size</Label>
                  <Select
                    value={maxMembers}
                    onValueChange={setMaxMembers}
                  >
                    <SelectTrigger id="max-members" className="w-32">
                      <SelectValue placeholder="Select max size" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10)].map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i === 0 ? 'member' : 'members'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-6 flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between">
              <div className="text-sm text-gray-500 flex items-center">
                <Trophy className="h-4 w-4 mr-2 text-blue-600" />
                <span>
                  Your team will be created for the selected competition. You'll be the team owner.
                </span>
              </div>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/teams")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Team"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
