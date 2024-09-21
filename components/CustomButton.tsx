import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
    title: string;
  };
  

export default function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: 'black',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: '50%'
      },
    buttonText: {
        color: 'white',
        fontSize: 15
        
      },
    
});
