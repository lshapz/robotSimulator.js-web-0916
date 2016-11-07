'use strict';

    class Robot {
      // implement your solution here
      constructor(bearing, coordinates){
        this.bearing = bearing;
        this.coordinates = coordinates;
      }


      at(arg1, arg2){
        this.coordinates = [arg1, arg2]
      }

      advance(){
       switch(this.bearing){
        case "east":
          this.coordinates[0]++; 
          break;
        case "west": 
          this.coordinates[0]--;
          break;          
        case "north":
          this.coordinates[1]++;
          break;
        case "south": 
          this.coordinates[1]--;
          break;
      }}


      orient(argument) {  
      if ([ 'east', 'west', 'north', 'south' ].includes(argument)) {
        this.bearing = argument
      } else {
        // var error = '
        throw Error('Invalid Robot Bearing')
      }}
     
      turnRight(){
       switch(this.bearing){
        case "east":
          this.bearing = "south"; 
          break;
        case "west": 
          this.bearing = "north";
          break;          
        case "north":
          this.bearing = "east";
          break;
        case "south": 
          this.bearing = "west";
          break;
      }}

      turnLeft(){
      switch(this.bearing){
        case "east":
          this.bearing = "north";
          break; 
        case "west": 
          this.bearing = "south";
          break;
        case "north":
          this.bearing = "west";
          break;
        case "south": 
          this.bearing = "east";
          break;
      }}

      instructions(string) {
        var things = string.split("")
        var other = things.map(thing => {
          if (thing === "L") {
            // debugger
            return "turnLeft"
          } else if (thing === "R") {
            // debugger
            return "turnRight"
          } else if (thing === "A") {
            // debugger
            return "advance";
          }
        })
           return other 
      }

      evaluate(string){
        var array = this.instructions(string)
        var that = this 
        array.forEach(element => {
          if (element === "turnRight"){
            that.turnRight()
          }
          else if (element === "advance") {
            that.advance()
          }
          else if (element === "turnLeft"){
            that.turnLeft()
          }
        })
      }

      place(args){
        this.at(args["x"], args["y"])
        this.orient(args["direction"])
      }

  }