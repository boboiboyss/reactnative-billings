import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const statusOptions = [
  { label: "Unpaid", value: "Unpaid" },
  { label: "Paid", value: "Paid" },
];

const locationOptions = [
  { label: "Centro 1st Floor, Unit 101", value: "Centro 1st Floor, Unit 101" },
  { label: "Centro 1st Floor, Unit 102", value: "Centro 1st Floor, Unit 102" },
];

const jenisTagihanOptions = [
  { label: "IPL", value: "IPL" },
  { label: "Internet", value: "Internet" },
  { label: "Parking Membership", value: "Parking Membership" },
];

const floorOptions = [
  { label: "1st Floor", value: "1st Floor" },
  { label: "2nd Floor", value: "2nd Floor" },
];

const unitOptions = [
  { label: "Unit 101", value: "Unit 101" },
  { label: "Unit 102", value: "Unit 102" },
];

const bills = [
  {
    location: "Centro 1st Floor, Unit 101",
    tagihan: "IPL",
    status: "Unpaid",
    invoicePeriod: "2024-06-20 - 2024-07-20",
    dueDate: "2024-08-10",
  },
  {
    location: "Centro 1st Floor, Unit 101",
    tagihan: "IPL",
    status: "Unpaid",
    invoicePeriod: "2024-06-20 - 2024-07-20",
    dueDate: "2024-08-10",
  },
  {
    location: "Centro 1st Floor, Unit 102",
    tagihan: "Internet",
    status: "Unpaid",
    invoicePeriod: "2024-06-20 - 2024-07-20",
    dueDate: "2024-08-10",
  },
  {
    location: "Centro 1st Floor, Unit 102",
    tagihan: "Parking Membership",
    status: "Unpaid",
    invoicePeriod: "2024-06-20 - 2024-07-20",
    dueDate: "2024-08-10",
  },
];

export default function HomePage() {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedJenisTagihan, setSelectedJenisTagihan] = useState<
    string | null
  >(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Billings</Text>
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={statusOptions}
          labelField="label"
          valueField="value"
          placeholder="Status"
          value={selectedStatus}
          onChange={(item) => {
            setSelectedStatus(item.value);
          }}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={locationOptions}
          labelField="label"
          valueField="value"
          placeholder="Location"
          value={selectedLocation}
          onChange={(item) => {
            setSelectedLocation(item.value);
          }}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={floorOptions}
          labelField="label"
          valueField="value"
          placeholder="Floor"
          value={selectedFloor}
          onChange={(item) => {
            setSelectedFloor(item.value);
          }}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={unitOptions}
          labelField="label"
          valueField="value"
          placeholder="Unit"
          value={selectedUnit}
          onChange={(item) => {
            setSelectedUnit(item.value);
          }}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={jenisTagihanOptions}
          labelField="label"
          valueField="value"
          placeholder="Jenis Tagihan"
          value={selectedJenisTagihan}
          onChange={(item) => {
            setSelectedJenisTagihan(item.value);
          }}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        {bills.map((bill, index) => (
          <View key={index} style={styles.billContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>Location</Text>
              <Text style={styles.value}>: {bill.location}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Tagihan</Text>
              <Text style={styles.value}>: {bill.tagihan}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Status</Text>
              <Text style={styles.value}>: {bill.status}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Invoice Period</Text>
              <Text style={styles.value}>: {bill.invoicePeriod}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Due Date</Text>
              <Text style={styles.value}>: {bill.dueDate}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  header: {
    height: 60,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  dropdownContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  dropdown: {
    width: "48%",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#999999",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#333333",
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  billContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1.5,
    color: "#333333",
  },
  value: {
    fontSize: 16,
    flex: 2.5,
    color: "#333333",
  },
});
