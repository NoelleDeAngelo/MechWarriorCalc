//This is the main object that contains all the units.
//The units are identified by their unique id.

const units = {
  //------Mechs-----

  mechs: {
    AOD104: {
      alive: true, //This is used to determine if the unit is still alive in the game.
      name: "Hatchetman",
      wId: "AOD104", //This is the unique id for the unit. It should be unique across all units. wId instead of ID
      variant: "HCT2F-M",
      points: 133,
      class: "Medium",
      faction: "Bannson's Raiders",
      primary: [1, "0/0"],
      secondary: [1, "0/12"],
      //Only Mechs can take equipment and pilot upgrades. They can take /up to/ either 2 equipment or 1 equipment and 1 pilot...
      vent: 2, //Only Mechs have Vent
      table1: {
        meleeDamage: [
          [3, "greenS"],
          [3, "greenS"],
          [2, "greenS"],
          [2, "greenS"],
          [2, "greenS"],
          [2, null],
          [2, null],
          [1, null],
          [1, null],
          [1, null],
          [0, null],
          [0, null],
        ],
        ballisticDamage: [
          [3, null],
          [3, null],
          [3, null],
          [2, null],
          [2, null],
          [2, null],
          [2, null],
          [2, null],
          [0, null],
          [0, null],
          [0, null],
          [0, null],
        ],
        mechSpeed: [
          [8, "blueS"],
          [7, "blueS"],
          [7, "blueS"],
          [6, "blueS"],
          [6, null],
          [6, null],
          [6, null],
          [6, null],
          [5, null],
          [5, null],
          [5, null],
          [4, null],
        ],
        attack: [
          [9, null],
          [9, null],
          [8, null],
          [8, null],
          [8, null],
          [7, null],
          [7, null],
          [6, null],
          [6, null],
          [6, null],
          [5, null],
          [4, null],
        ],
        defense: [
          [20, null],
          [20, null],
          [20, null],
          [19, null],
          [19, null],
          [19, null],
          [18, null],
          [18, null],
          [17, null],
          [17, null],
          [16, null],
          [15, null],
        ],
        repair: [["green"]],
      },
      heat: {
        meleeDamage: [
          [0, "greenS"],
          [0, null],
          [1, null],
          [1, null],
          [1, null],
        ],
        ballisticDamage: [
          [0, "greenS"],
          [0, null],
          [0, null],
          [0, null],
          [-1, "yellowS"],
        ],
        mechSpeed: [
          [0, "greenS"],
          [0, null],
          [1, null],
          [2, "yellowS"],
          [2, "yellowS"],
        ],
      },
    },
  },

  //-----Vehicles and Infantry-----

  vehicles: {
    AOD071: {
      alive: true,
      name: "SM2 Heavy Artillery Vehicle",
      wId: "AOD071",
      points: 36,
      faction: "Bannson's Raiders",
      primary: [1, "0/10"],
      artilleryRange: 22,
      capacity: null,
      table1: {
        ballisticDamage: [
          [2, "redS"],
          [2, "redS"],
          [2, "redS"],
          [2, "redC"],
          [0, null],
        ],
        trackedSpeed: [
          [8, null],
          [8, null],
          [7, null],
          [7, null],
          [6, null],
        ],
        attack: [
          [7, null],
          [7, null],
          [6, null],
          [5, null],
          [4, "blackS"],
        ],
        defense: [
          [20, "greyS"],
          [19, "greyS"],
          [18, null],
          [18, null],
          [17, null],
        ],
        repair: [["green"]],
      },
    },
  },
};

export default units;
