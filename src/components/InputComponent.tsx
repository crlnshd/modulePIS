import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import React from "react";
import { FormEvent } from "react";

interface InputProps {
  onArraysSubmit: (data: {
    arr1: string[];
    arr2: string[];
    input1: string;
    input2: string;
  }) => void;
}

const ArrayInput: React.FC<InputProps> = ({ onArraysSubmit }) => {
  const [array1, setArr1] = React.useState<string>("");
  const [array2, setArr2] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const isNum = (input: string): boolean => {
    const items = input.split(",").map((item) => item.trim());
    return items.every((item) => /^\d+$/.test(item));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isNum(array1) || !isNum(array2)) {
      setError("Масиви повинні містити тільки цифри");
      return;
    }

    const arr1 = array1.split(",").map((item) => item.trim());
    const arr2 = array2.split(",").map((item) => item.trim());

    onArraysSubmit({ arr1, arr2, input1: array1, input2: array2 });
    setArr1("");
    setArr2("");
    setError("");
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Введіть 2 масиви</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <form onSubmit={handleSubmit}>
          <IonLabel>Перший масив (через кому)</IonLabel>
          <IonInput
            value={array1}
            onIonChange={(e) => setArr1(e.detail.value || "")}
            required
          />
          <IonLabel>Другий масив (через кому)</IonLabel>
          <IonInput
            value={array2}
            onIonChange={(e) => setArr2(e.detail.value || "")}
            required
          />
          {error && (
            <IonText>
              <p>{error}</p>
            </IonText>
          )}
          <IonButton type="submit" expand="block" disabled={!array1 || !array2}>
            Отримати унікальні елементи
          </IonButton>
        </form>
      </IonCardContent>
    </IonCard>
  );
};

export default ArrayInput;
