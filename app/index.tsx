import Button from "@/components/Button";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          All-in-one Management Platform for Events, Tickets, and More.
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button theme="primary" label="Continue with Google" />
        <Text style={styles.separator}>or</Text>
        <Button label="Continue with Zalo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 150,
  },
  title: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "600",
  },
  buttonGroup: {
    alignItems: "center",
    gap: 16, 
  },
  separator: {
    color: "#6B7280", 
  },
});
