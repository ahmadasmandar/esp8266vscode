//
// Copyright 2015 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// FirebaseDemo_ESP8266 is a sample that demo the different functions
// of the FirebaseArduino API.
#include<Arduino.h>
#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <ESP8266HTTPClient.h>

// Set these to run example.
#define FIREBASE_HOST "esptut-88be5.firebaseio.com"
#define FIREBASE_AUTH "M52QNwTcdRH212aB6wH8SZgwkgRedHdBXLGrutaF"
#define WIFI_SSID "Mahya"
#define WIFI_PASSWORD "102030ugd"
int ledPower = 2;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  pinMode(ledPower, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int ledStatus = Firebase.getInt("ledStatus");
  Serial.println(ledStatus);
  if(ledStatus == 1){
    digitalWrite(ledPower, HIGH);
  } else {
    digitalWrite(ledPower, LOW);
  }

  //set data:
  //Firebase.set(ledStatus, "1");
}