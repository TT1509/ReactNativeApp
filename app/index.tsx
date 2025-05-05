import Button from "@/components/Button";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get('window');

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
    paddingHorizontal: width * 0.05,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.15,
  },
  title: {
    textAlign: "left",
    fontSize: width * 0.08,
    fontWeight: "600",
  },
  buttonGroup: {
    alignItems: "center",
    gap: width * 0.02, 
  },
  separator: {
    color: "#6B7280", 
  },
});
