import { Component } from "@angular/core";

@Component({
  templateUrl: "./arduino.component.html"
})
export class ArduinoProjectComponent {
  public arduino = `
  int led = 13;
  int led2 = 12;
  int led3 = 11;
  int motionPin = 4;
  const int buttonPin = 2;
  const int motorPin = 9;
  const int motorPin2 = 10;

  // variables will change:
  int buttonState = 0;         // variable for reading the pushbutton status
  int motionState = 0;

  // the setup routine runs once when you press reset:
  void setup() {
    // initialize the digital pin as an output.
    pinMode(led, OUTPUT);
    pinMode(led2, OUTPUT);
    pinMode(led3, OUTPUT);
    pinMode(motionPin, INPUT);
    pinMode(buttonPin, INPUT);
    pinMode(motorPin, OUTPUT);
    pinMode(motorPin2, OUTPUT);
  }

  // the loop routine runs over and over again forever:
  void loop() {
    motionState = digitalRead(motionPin);  // read input value
    buttonState = digitalRead(buttonPin);
    if (motionState == HIGH && buttonState == HIGH) {
      digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
      delay(50);               // wait for a second
      digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
      delay(50);
      { digitalWrite(led2, HIGH);
        delay(50);
        digitalWrite(led2, LOW);
        delay(50);
      }
      { digitalWrite(led3, HIGH);
        delay(50);
        digitalWrite(led3, LOW);
        delay(50);
      }// wait for a second
    }
    if (buttonState == LOW) {
      digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
      delay(100);               // wait for a second
      digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
      delay(100);
      { digitalWrite(led2, HIGH);
        delay(100);
        digitalWrite(led2, LOW);
        delay(100);
      }
      { digitalWrite(led3, HIGH);
        delay(100);
        digitalWrite(led3, LOW);
        delay(100);
      }// wait for a second
      digitalWrite(motorPin, HIGH);
      digitalWrite(motorPin2, HIGH);
    }
    else {
      digitalWrite(motorPin, LOW);
      digitalWrite(motorPin2, LOW);
    }
  }
`;
}
