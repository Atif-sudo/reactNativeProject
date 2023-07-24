import React from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
} from "react-native";
class HomeScreen extends React.Component {
  state = {
    q1: "",
    a1: "",
    q2: "",
    a2: "",
    q3: "",
    a3: "",
    disp1: false,
    disp2: false,
    disp3: false,
    tot: 0,
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          {/* First box */}
          <View style={[styles.box, styles.box1]}>
            {/* Internal container 1 */}
            <View style={styles.internalContainer1}>
              {/* Box 3 */}
              <View style={[styles.internalBox, styles.box3]}>
                <Text style={[styles.setColorWhite, styles.textFirst]}>
                  Product 1
                </Text>
                <Text style={[styles.setColorWhite, styles.textSecond]}>
                  ₹ 199.99
                </Text>
              </View>

              {/* Box 4 */}
              <View style={[styles.internalBox, styles.box4, styles.inputtext]}>
                <TextInput
                  placeholder="Qty"
                  style={styles.input}
                  onChangeText={(value) =>
                    this.setState({
                      q1: value,
                      a1: parseFloat(value) * 199.99,
                      disp1: value.length > 0 ? true : false,
                      tot:
                        parseFloat(value) * 199.99 +
                        this.state.a2 +
                        this.state.a3,
                    })
                  }
                  value={this.state.q1}
                />
              </View>
            </View>

            {/* Internal container 2 */}
            <View style={styles.internalContainer2}>
              {/* Box 5 */}
              <View style={[styles.internalBox, styles.box3]}>
                <Text style={[styles.setColorWhite, styles.textFirst]}>
                  Product 2
                </Text>
                <Text style={[styles.setColorWhite, styles.textSecond]}>
                  ₹ 199.99
                </Text>
              </View>

              {/* Box 6 */}
              <View style={[styles.internalBox, styles.box4, styles.inputtext]}>
                <TextInput
                  placeholder="Qty"
                  style={styles.input}
                  onChangeText={(value) =>
                    this.setState({
                      q2: value,
                      a2: parseFloat(value) * 199.99,
                      disp2: value.length > 0 ? true : false,
                      tot:
                        parseFloat(value) * 199.99 +
                        this.state.a1 +
                        this.state.a3,
                    })
                  }
                  value={this.state.q2}
                />
              </View>
            </View>

            {/* Internal container 2 */}
            <View style={styles.internalContainer2}>
              {/* Box 5 */}
              <View style={[styles.internalBox, styles.box3]}>
                <Text style={[styles.setColorWhite, styles.textFirst]}>
                  Product 3
                </Text>
                <Text style={[styles.setColorWhite, styles.textSecond]}>
                  ₹ 199.99
                </Text>
              </View>

              {/* Box 6 */}
              <View style={[styles.internalBox, styles.box4, styles.inputtext]}>
                <TextInput
                  placeholder="Qty"
                  style={styles.input}
                  onChangeText={(value) =>
                    this.setState({
                      q3: value,
                      a3: parseFloat(value) * 199.99,
                      disp3: value.length > 0 ? true : false,
                      tot:
                        parseFloat(value) * 199.99 +
                        this.state.a1 +
                        this.state.a2,
                    })
                  }
                  value={this.state.q3}
                />
              </View>
            </View>
          </View>

          {/* Second box */}
          <View style={[styles.box, styles.box2]}>
            {/* Table header */}
            <View style={styles.tableRow}>
              <Text style={[styles.headerCell, styles.tableStyle]}>
                Product
              </Text>
              <Text style={[styles.headerCell, styles.tableStyle]}>Qty</Text>
              <Text style={[styles.headerCell, styles.tableStyle]}>Rate</Text>
              <Text style={[styles.headerCell, styles.tableStyle]}>Amt</Text>
            </View>

            {/* Table Rows */}
            <View style={[this.state.disp1 ? styles.tableRow : styles.hidden]}>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                Product 1
              </Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                {this.state.q1 + ""}
              </Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>199.99</Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                {this.state.a1 + ""}
              </Text>
            </View>
            <View style={[this.state.disp2 ? styles.tableRow : styles.hidden]}>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                Product 2
              </Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                {this.state.q2 + ""}
              </Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>199.99</Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                {this.state.a2 + ""}
              </Text>
            </View>
            <View style={[this.state.disp3 ? styles.tableRow : styles.hidden]}>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                Product 3
              </Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                {this.state.q3 + ""}
              </Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>199.99</Text>
              <Text style={[styles.dataCell, styles.tableStyle]}>
                {this.state.a3 + ""}
              </Text>
            </View>
            <View>
              <Text style={[styles.totalBox]}>
                Total: {this.state.tot + ""} INR
              </Text>
            </View>
          </View>
          <View>
            <Button
              style={styles.submitbutton}
              title="Submit"
              onPress={() => {
                return;

                //Handle LOGIN
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "aliceblue",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderRadius: 2,
  },
  internalContainer1: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    marginTop: 10,
  },
  internalContainer2: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    marginTop: -395,
  },
  box: {
    width: 179,
    height: 590,
  },
  box1: {
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 4,
  },
  box2: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    flexWrap: "wrap",
  },
  internalBox: {
    width: 64,
    height: 56,
    borderRadius: 4,
  },
  box3: {
    backgroundColor: "dodgerblue",
    color: "white",
    padding: 2,
    width: 78,
    zIndex: 1,
  },
  inputtext: {
    padding: 12,
    width: 75,
    left: -10,
  },
  textFirst: {
    textAlign: "center",
    top: 3,
  },
  textSecond: {
    textAlign: "right",
    top: 10,
    fontSize: 10,
  },

  setColorWhite: {
    color: "white",
  },
  box4: {
    backgroundColor: "gainsboro",
  },

  input: {
    height: 30,
    marginLeft: 14,
    borderWidth: 2,
    padding: 3,
    borderRadius: 4,
    borderColor: "darkgrey",
  },
  button: {
    height: 50,
    backgroundColor: "lightcoral",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  tableRow: {
    paddingTop: 9,
    paddingLeft: 3,
    flexDirection: "row",
    flex: 0,

    textAlign: "center",
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    borderWidth: 1,
    alignItems: "center",
  },
  dataCell: {
    flex: 1,
    borderWidth: 1,
  },
  tableStyle: {
    fontSize: 11,
    paddingTop: 10,
    borderColor: "darkgrey",

    textAlign: "center",
  },
  totalBox: {
    padding: 10,
    borderWidth: 2,
    top: 120,
    position: "relative",
  },

  hidden: {
    width: 0,
    height: 0,
  },
  submitbutton: {
    left: -20,
    top: 200,
  },
});
export default HomeScreen;
