

//int frequency = 0;
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include "index.h"
#define LED D0


const char* ssid = "Galaxy";
const char* password = "12345678";
ESP8266WebServer server(80);

void handleRoot()
{
  String s = webpage;
  server.send(200, "text/html", s);
}

void sensor_data()
{
  digitalWrite(D7, LOW);
  digitalWrite(D8, LOW);
  // Reading the output frequency
  double frequency = pulseIn(D2, LOW);
  //Remaping the value of the frequency to the RGB Model of 0 to 255
  frequency = map(frequency, 25, 72, 255, 0);
  // Printing the value on the serial monitor
  Serial.print("R= ");//printing name
  Serial.print(frequency);//printing RED color frequency
  Serial.print("  ");
  delay(100);

  digitalWrite(D7, HIGH);
  digitalWrite(D8, HIGH);
  // Reading the output frequency
  double frequency1 = pulseIn(D2, LOW);
  //Remaping the value of the frequency to the RGB Model of 0 to 255
  frequency1 = map(frequency1, 30, 90, 255, 0);
  // Printing the value on the serial monitor
  Serial.print("G= ");//printing name
  Serial.print(frequency1);//printing RED color frequency
  Serial.print("  ");
  delay(100);

  digitalWrite(D7, LOW);
  digitalWrite(D8, HIGH);
  // Reading the output frequency
  double frequency2 = pulseIn(D2, LOW);
  //Remaping the value of the frequency to the RGB Model of 0 to 255
  frequency2 = map(frequency2, 25, 70, 255, 0);
  // Printing the value on the serial monitor
  Serial.print("B= ");//printing name
  Serial.print(frequency2);//printing RED color frequency
  Serial.println("  ");
  delay(100);


  //  server.send(200, "text/plane", sensor_value1);
  String sensor_value = String(frequency);
  String sensor_value1 = String(frequency1);
  String sensor_value2 = String(frequency2);

  String final = "RED:" + sensor_value + "   " + "GREEN:" + sensor_value1 + "   " + "BLUE:" + sensor_value2;
  server.send(200, "text/plane", final);
}







void setup(void)
{
  pinMode(D5, OUTPUT);
  pinMode(D6, OUTPUT);
  pinMode(D7, OUTPUT);
  pinMode(D8, OUTPUT);
  pinMode(D2, INPUT);

  // Setting frequency-scaling to 20%
  digitalWrite(D5, HIGH);
  digitalWrite(D6, LOW);
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("");
  pinMode(LED, OUTPUT);

  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print("Connecting...");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.on("/adcread", sensor_data);
  //  server.on("/adcread1", sensor_data1);
  server.begin();
}

void loop(void)
{

  server.handleClient();
}
