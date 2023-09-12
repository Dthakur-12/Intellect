//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
// create a component
const ModalComp = ({
    children,
    isVisible=false,
    onBackdropPress=()=>{},
    style={},
}) => {
    return (
        <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={{...styles.style,...style}}
        >
            {children}

        </Modal>

    );
};

// define your styles
const styles = StyleSheet.create({
    style: {
        
    }
    
});

//make this component available to the app
export default ModalComp;
