const stdOpHave = [
  { id: 20220613, op1: "ML", op2: "AL" },
  { id: 20220614, op1: "ML", op2: "AL" },
  { id: 20220615, op1: "ML", op2: "AL" },
  { id: 20220616, op1: "ML", op2: "AL" },
  { id: 20220617, op1: "ML", op2: "AL" },
  { id: 20220618, op1: "ML", op2: "AL" },
  { id: 20220619, op1: "ML", op2: "AL" },
  { id: 20220620, op1: "ML", op2: "AL" },
  { id: 20220621, op1: "ML", op2: "AL" },
  { id: 20220622, op1: "ML", op2: "AL" },
  { id: 20220623, op1: "ML", op2: "AL" },
  { id: 20220624, op1: "ML", op2: "AL" },
  { id: 20220625, op1: "ML", op2: "AL" },
  { id: 20220626, op1: "ML", op2: null },
];

function StudentGrouping(students) {
  const moduleNames = ["AL", "ML", "MAD", "SWD", "MPG", "XRMI"];

  const stdOnlyOneOp = students.filter(
    (student) => !student.op1 || !student.op2
  );

  const onlyOpGroup = moduleNames.map((module) => {
    const moduleOnly = stdOnlyOneOp.filter(
      (std) => std.op1 === module || std.op2 === module
    );
    return { name: module, count: moduleOnly.length, students: moduleOnly };
  });

  const stdWithBothOptions = students.filter(
    (student) => student.op1 && student.op2
  );
  //   const opAsAL = chosenModule(stdWithBothOptions, "AL");
  //   const opAsMAD = chosenModule(stdWithBothOptions, "MAD");
  //   const opAsSWD = chosenModule(stdWithBothOptions, "SWD");
  //   const opAsMPG = chosenModule(stdWithBothOptions, "MPG");
  //   const opAsXRMI = chosenModule(stdWithBothOptions, "XRMI");

  //   const opMLandAL = filterCombinations(opAsML, "AL");
  //   const opMLandMAD = filterCombinations(opAsML, "MAD");
  //   const opMLandSWD = filterCombinations(opAsML, "SWD");
  //   const opMLandMPG = filterCombinations(opAsML, "MPG");
  //   const opMLandXRMI = filterCombinations(opAsML, "XRMI");
  //   const opALandMAD = filterCombinations(opAsAL, "MAD");
  //   const opALandSWD = filterCombinations(opAsAL, "SWD");
  //   const opALandMPG = filterCombinations(opAsAL, "MPG");
  //   const opALandXRMI = filterCombinations(opAsAL, "XRMI");
  //   const opMADandSWD = filterCombinations(opAsMAD, "SWD");
  //   const opMADandMPG = filterCombinations(opAsMAD, "MPG");
  //   const opMADandXRMI = filterCombinations(opAsMAD, "XRMI");
  //   const opSWDandMPG = filterCombinations(opAsSWD, "MPG");
  //   const opSWDandXRMI = filterCombinations(opAsSWD, "XRMI");
  //   const opMPGandXRMI = filterCombinations(opAsMPG, "XRMI");

  const combinedArray = [];
  const combinedArrayNames = [];

  // Combinations of modules chosen by students
  const stdOpHaveCombinations = stdWithBothOptions.reduce((acc, std) => {
    if (std.op1 && std.op2) {
      const combination = [std.op1, std.op2].sort().join(" - ");

      if (combinedArrayNames.includes(combination)) {
        combinedArray.forEach((com) => {
          if (com.name === combination) {
            com.count++;
            com.students.push(std);
          }
        });
      } else {
        combinedArray.push({ name: combination, count: 1, students: [std] });
        combinedArrayNames.push(combination);
      }

      acc[combination] = acc[combination] ? acc[combination] + 1 : 1;
    }
    return acc;
  }, {});

  combinedArray.sort((a, b) => b.count - a.count);

  const groupMaxCount = 10;
  const groupMinCount = 5;

  const maxCombinations = combinedArray.filter(
    (com) => com.count > groupMaxCount
  );

  const minMaxGroupCombinations = combinedArray.filter(
    (com) => com.count >= groupMinCount && com.count <= groupMaxCount
  );

  const minCombinations = combinedArray.filter(
    (com) => com.count < groupMinCount
  );

  const mainGroups = [];
  let stdWithNoGroup = [];

  addMinMaxCombinationsToMainGroups(minMaxGroupCombinations, mainGroups);
  addMaxCombinationsToMainGroups(
    maxCombinations,
    mainGroups,
    groupMinCount,
    groupMaxCount,
    stdWithNoGroup
  );

  addOneOptionToMainGroups(
    onlyOpGroup,
    mainGroups,
    groupMinCount,
    groupMaxCount,
    stdWithNoGroup
  );

  addMinCombinationsToMainGroups(minCombinations, mainGroups, stdWithNoGroup);
  NoGroupStudents(stdWithNoGroup, mainGroups, groupMaxCount);

  stdWithNoGroup = stdWithNoGroup.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  stdWithNoGroup = addNoGroupStdsToFinalGroups(
    stdWithNoGroup,
    mainGroups,
    groupMaxCount
  );

  return mainGroups;
}

function chosenModule(students, option) {
  return students.filter(
    (student) => student.op1 === option || student.op2 === option
  );
}

function filterCombinations(students, option) {
  return students.filter(
    (student) => student.op1 === option && student.op2 === option
  );
}

function getUniqueElements(array) {
  // Create an empty Set to store unique elements
  const uniqueElements = new Set();
  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Add each element to the Set
    uniqueElements.add(array[i]);
  }
  // Convert the Set back to an array and return it
  return Array.from(uniqueElements);
}

function addMinMaxCombinationsToMainGroups(minMaxCombinations, mainGroups) {
  minMaxCombinations.forEach((group) => {
    const tempGroup = [];
    const modules = [];

    group.students.forEach((student) => {
      tempGroup.push(student);
      if (student.op1 !== null) {
        modules.push(student.op1);
      }
      if (student.op2 !== null) {
        modules.push(student.op2);
      }
    });
    const uniqueModules = getUniqueElements(modules);
    const groupFormed = { students: tempGroup, modules: uniqueModules };
    mainGroups.push(groupFormed);
  });
}

function addMaxCombinationsToMainGroups(
  maxCombinations,
  mainGroups,
  groupMinCount,
  groupMaxCount,
  noGroupStds
) {
  maxCombinations.forEach((group) => {
    let groupCount = group.count;
    let studentCount = 0;

    while (groupCount >= groupMinCount) {
      const tempGroup = [];
      const modules = [];
      for (let i = 0; i < groupMaxCount; i++) {
        tempGroup.push(group.students[i + studentCount]);
        if (group.students[i + studentCount].op1 !== null) {
          modules.push(group.students[i + studentCount].op1);
        }
        if (group.students[i + studentCount].op2 !== null) {
          modules.push(group.students[i + studentCount].op2);
        }
        groupCount--;
        if (groupCount === 0) {
          break;
        }
      }
      studentCount += 10;
      if (groupCount !== 0 && group.count - studentCount <= groupMinCount) {
        for (let j = studentCount; j < group.count; j++) {
          noGroupStds.push(group.students[j]);
        }
      }
      const uniqueModules = getUniqueElements(modules);
      mainGroups.push({ students: tempGroup, modules: uniqueModules });
    }
  });
}

function addOneOptionToMainGroups(
  onlyOpGroup,
  mainGroups,
  groupMinCount,
  groupMaxCount,
  noGroupStds
) {
  onlyOpGroup.forEach((group) => {
    let groupCount = group.count;
    let studentCount = 0;
    let checked = false;

    if (groupCount === 0) {
      return;
    }

    while (groupCount >= groupMinCount) {
      checked = true;
      const tempGroup = [];
      const modules = [];
      for (let i = 0; i < groupMaxCount; i++) {
        tempGroup.push(group.students[i + studentCount]);
        if (group.students[i + studentCount].op1 !== null) {
          modules.push(group.students[i + studentCount].op1);
        } else if (group.students[i + studentCount].op2 !== null) {
          modules.push(group.students[i + studentCount].op2);
        }
        groupCount--;
        if (groupCount === 0) {
          break;
        }
      }
      studentCount += 10;
      if (groupCount !== 0 && group.count - studentCount <= groupMinCount) {
        for (let j = studentCount; j < group.count; j++) {
          noGroupStds.push(group.students[j]);
        }
      }
      const uniqueModules = getUniqueElements(modules);
      mainGroups.push({ students: tempGroup, modules: uniqueModules });
    }
    if (!checked) {
      group.students.forEach((student) => {
        noGroupStds.push(student);
      });
    }
  });
}

function addMinCombinationsToMainGroups(
  minCombinations,
  mainGroups,
  noGroupStds
) {
  minCombinations.forEach((group) => {
    group.students.forEach((student) => {
      let checked = false;
      // Check if the student has only one option
      if (
        (student.op1 === null || student.op2 === null) &&
        (student.op1 !== null || student.op2 !== null)
      ) {
        // Iterate through the mainGroups
        mainGroups.forEach((mainGroup) => {
          checked = true;
          // Check if the mainGroup's modules array has only one element
          if (mainGroup.modules.length === 1) {
            // Check if the student's option is in the mainGroup's modules array
            mainGroup.modules.includes(student.op1)
              ? mainGroup.students.push(student)
              : // Check if the student's option is in the mainGroup's modules array
              mainGroup.modules.includes(student.op2)
              ? mainGroup.students.push(student)
              : noGroupStds.push(student);
          } else if (mainGroup.modules.length === 2) {
            // Check if the student's options are in the mainGroup's modules array
            mainGroup.modules.includes(student.op1) &&
            mainGroup.modules.includes(student.op2)
              ? mainGroup.students.push(student)
              : noGroupStds.push(student);
          } else {
            // Add the student to the noGroupStds array
            noGroupStds.push(student);
          }
        });
      } else {
        const checkedStds = [];
        let count = mainGroups.length;
        mainGroups.forEach((mainGroup) => {
          checked = true;
          if (checkedStds.includes(student.id)) {
            return;
          }
          if (
            mainGroup.modules.includes(student.op1) ||
            mainGroup.modules.includes(student.op2)
          ) {
            if (mainGroup.students.length < groupMaxCount) {
              mainGroup.students.push(student);
              checkedStds.push(student.id);
              mainGroup.modules.includes(student.op1)
                ? null
                : mainGroup.modules.push(student.op1);
              mainGroup.modules.includes(student.op2)
                ? null
                : mainGroup.modules.push(student.op2);
            } else {
              noGroupStds.push(student);
              checkedStds.push(student.id);
            }
          } else {
            noGroupStds.push(student);
            checkedStds.push(student.id);
          }
          count--;
          if (count === 0) {
            if (!checkedStds.includes(student.id)) {
              noGroupStds.push(student);
            }
          }
        });
        if (!checked) {
          noGroupStds.push(student);
        }
      }
    });
  });
}

function NoGroupStudents(stdWithNoGroup, mainGroups, groupMaxCount) {
  stdWithNoGroup.forEach((student) => {
    // Check if the student has only one option
    if (
      (student.op1 === null || student.op2 === null) &&
      (student.op1 !== null || student.op2 !== null)
    ) {
      // Iterate through the mainGroups
      const stdAdded = [];
      let groupCount = mainGroups.length;
      mainGroups.forEach((mainGroup) => {
        // Check if the mainGroup's modules array has only one element
        if (mainGroup.students.length >= groupMaxCount) {
          return;
        }
        if (mainGroup.modules.length === 1) {
          // Check if the student's option is in the mainGroup's modules array
          mainGroup.modules.includes(student.op1)
            ? mainGroup.students.push(student)
            : // Check if the student's option is in the mainGroup's modules array
            mainGroup.modules.includes(student.op2)
            ? mainGroup.students.push(student)
            : null;
          mainGroup.students.includes(student)
            ? stdAdded.push(student.id)
            : null;
        } else if (mainGroup.modules.length === 2) {
          // Check if the student's options are in the mainGroup's modules array
          mainGroup.modules.includes(student.op1) ||
          mainGroup.modules.includes(student.op2)
            ? mainGroup.students.push(student)
            : null;
          mainGroup.students.includes(student)
            ? stdAdded.push(student.id)
            : null;
        }
        groupCount--;
        if (!stdAdded.includes(student.id) && groupCount === 0) {
          // Add the student to the stdWithNoGroup array
          stdWithNoGroup.push(student);
        }
      });
    } else {
      const checkedStds = [];
      const mainGroupAdded = [];
      let count = mainGroups.length;
      mainGroups.forEach((mainGroup) => {
        if (
          checkedStds.includes(student.id) ||
          mainGroupAdded.includes(student.id)
        ) {
          return;
        }
        if (
          mainGroup.modules.includes(student.op1) ||
          mainGroup.modules.includes(student.op2)
        ) {
          if (mainGroup.students.length < groupMaxCount) {
            mainGroup.students.push(student);
            mainGroupAdded.push(student.id);
            checkedStds.push(student.id);
            mainGroup.modules.includes(student.op1)
              ? null
              : mainGroup.modules.push(student.op1);
            mainGroup.modules.includes(student.op2)
              ? null
              : mainGroup.modules.push(student.op2);
          } else {
            stdWithNoGroup.includes(student)
              ? null
              : stdWithNoGroup.push(student);
          }
        } else {
          stdWithNoGroup.includes(student)
            ? null
            : stdWithNoGroup.push(student);
          checkedStds.push(student.id);
        }
        count--;
        if (count === 0) {
          if (!checkedStds.includes(student.id)) {
            stdWithNoGroup.push(student);
          }
        }
        // Remove the student from the stdWithNoGroup array that is added to the mainGroup
        stdWithNoGroup = stdWithNoGroup.filter((std) => std.id !== student.id);
      });
    }
  });
}

function addNoGroupStdsToFinalGroups(
  stdWithNoGroup,
  mainGroups,
  groupMaxCount
) {
  let groupCount = stdWithNoGroup.length;
  let stdCount = 0;
  let tempGroup = [];
  let modules = [];

  while (groupCount > 0) {
    for (let i = 0; i < groupMaxCount; i++) {
      stdWithNoGroup[i + stdCount].op1 !== null
        ? modules.push(stdWithNoGroup[i + stdCount].op1)
        : null;
      stdWithNoGroup[i + stdCount].op2 !== null
        ? modules.push(stdWithNoGroup[i + stdCount].op2)
        : null;
      tempGroup.push(stdWithNoGroup[i + stdCount]);
      groupCount--;
      if (groupCount === 0) {
        stdWithNoGroup = [];
        break;
      }
    }
    stdCount += 10;
    const uniqueModules = getUniqueElements(modules);
    mainGroups.push({ students: tempGroup, modules: uniqueModules });
    tempGroup = [];
    modules = [];
  }
  return stdWithNoGroup;
}

export { StudentGrouping };
