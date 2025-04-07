import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonText,
} from "@ionic/react";
import ArrayInput from "../components/InputComponent";
import arrayService from "../services/service";
import "./Tab1.css";
import React from "react";

const Tab1: React.FC = () => {
  const [uniqueElements, setUniqueElements] = React.useState<string[]>([]);
  const [inputArrays, setInputArrays] = React.useState<{
    input1: string;
    input2: string;
  } | null>(null);

  const handleArraysSubmit = (data: {
    arr1: string[];
    arr2: string[];
    input1: string;
    input2: string;
  }) => {
    const result = arrayService.getUniqueElements(data.arr1, data.arr2);
    setUniqueElements(result);
    setInputArrays({ input1: data.input1, input2: data.input2 });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Унікальні елементи</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ArrayInput onArraysSubmit={handleArraysSubmit} />

        {inputArrays && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Результат</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <>
                <p>Перший масив: {inputArrays.input1}</p>
                <p>Другий масив: {inputArrays.input2}</p>
              </>
              {uniqueElements.length > 0 ? (
                <>
                  <h3>Унікальні елементи:</h3>
                  <IonList>
                    {uniqueElements.map((element, index) => (
                      <IonItem key={index}>{element}</IonItem>
                    ))}
                  </IonList>
                </>
              ) : (
                <IonText>
                  <p>Унікальних елементів немає</p>
                </IonText>
              )}
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
