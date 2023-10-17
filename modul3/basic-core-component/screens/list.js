import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
} from "react-native";
import React, {useState} from "react";
import Button from "../components/button";
// Dummmy Data (Array of Object)
const datas = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];

// Functional Component
const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  // Arrow Function with destructured argument
  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity style={styles.itemContainer} onPress={()=>{
          setSelectedItem(item);
          setModalVisible(true);
        }}>
          <View>
            <Image source={{ uri: item.image }} style={styles.imgStyle} />

            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
      data={datas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />

    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{selectedItem && selectedItem.title}</Text>
        <Image source={{uri: selectedItem && selectedItem.image}} style={styles.modalImage}/>
        <Button title="close modal" onPress={() => setModalVisible(false)}/>
      </View>
    </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: null,
  },
  title:{
    fontSize: 24
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
  modalContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 15,
    paddingLeft:25,
    paddingRight:25,
    marginBottom: 20
  },
  modalImage:{
    // fontSize: 15,
    paddingLeft:25,
    paddingRight:25,
    marginBottom: 20
  }
});

export default List;