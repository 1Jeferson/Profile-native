import { View } from "react-native";
import { Title } from "@/components/Title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./Badge";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

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
        <MaterialIcons
          name="add"
          size={20}
          color={colors.white}
        />
      </View>
    </View>
  );
}
