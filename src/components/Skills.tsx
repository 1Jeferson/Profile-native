import { View } from "react-native";
import { Title } from "@/components/Title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./Badge";

export function Skills() {
  return (
    <View className="w-full">
      <Title>Skills</Title>

      <View className="flex-row flex-wrap w-full gap-3">
        {SKILLS.map((skill) => (
          <Badge
            key={skill.name}
            label={skill.name}
            icon={skill.icon}
          />
        ))}
      </View>
    </View>
  );
}
