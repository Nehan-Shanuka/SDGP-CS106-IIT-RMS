

const Optional_modules =[
    {module_id:"1",
    module_name:"Algorithms: Theory, design and implementation",
    semester:"2 semester" ,
    level:"Level 5"
    }, {module_id:"2",
        module_name:"Machine Learning and Data mining",
        semester:"2 semester",
        level:"Level 5"
    },
    {module_id:"3",
        module_name:"Server-side Web Development",
        semester:"2 semester",
        level:"Level 5"
    },
    {module_id:"4",
        module_name:"Advanced Client-side Development",
        semester:"1 semester",
        level:"Level 5"
    },
    {module_id:"5",
        module_name:"HCI & User Experience",
        semester:"1 semester",
        level:"Level 5"
    },
    {module_id:"6",
        module_name:"Mobile Application Development",
        semester:"2 semester",
        level:"Level 5"
    },
    {module_id:"7",
        module_name:"Robotic Principles",
        semester:"1 semester",
        level:"Level 5"
    },
    {module_id:"8",
        module_name:"3D Interactive Media Development",
        semester:"1 semester",
        level:"Level 5"
    },
    {module_id:"9",
        module_name:"Game Engine Architecture",
        semester:"1 semester",
        level:"Level 5"
    },
    {module_id:"10",
        module_name:"XR Multimodal Interaction",
        semester:"2 semester",
        level:"Level 5"
    },
    {module_id:"11",
        module_name:"Information Technology Security",
        semester:"1 semester",
        level:"Level 5"
    },
    {module_id:"12",
        module_name:"Maths and Physics for Games",
        semester:"2 semester",
        level:"Level 5"
    },
    {module_id:"13",
        module_name:"Sensors & Interfaces",
        semester:"2 semester",
        level:"Level 5"
    }


]

const Core_Module = [
    {module_id:"C5COSC019C",
        module_name:"Object Oriented Programming",
        semester:"1 semester",
        level:"Level 5"
    },
    {module_id:"5COSC021C",
        module_name:"Software Development Group Project (work based\n" +
            "module)",
        semester:"year",
        level:"Level 5"
    },
    {module_id:"5COSC022C",
        module_name:"Client-Server Architectures",
        semester:"2 semester",
        level:"Level 5"
    },
    {module_id:"5COSC020C",
        module_name:"Database Systems",
        semester:"1 semester",
        level:"Level 5"
    }

]

const students = [
    { id: 20220613, op1_id: "2", op2_id: "1" },
    { id: 20220614, op1_id: "10", op2_id: "4" },
    { id: 20220616, op1_id: "3", op2_id: "1" },
    { id: 20220618, op1_id: "4", op2_id: "2" },
    { id: 20220620, op1_id: "10", op2_id: "5" },
    { id: 20220622, op1_id: "4", op2_id: "12" },
    { id: 20220624, op1_id: "3", op2_id: "5"},
    { id: 20220626, op1_id: "2", op2_id: "1" },
    { id: 20220628, op1_id: "4", op2_id: "6" },
    { id: 20220630, op1_id: "11", op2_id: "1" },
    { id: 20220632, op1_id: "2", op2_id: "3" },
    { id: 20220634, op1_id: "4", op2_id: "1" },
    { id: 20220636, op1_id: "11", op2_id: "6" },
    { id: 20220638, op1_id: "4", op2_id: "1" },
    { id: 20220640, op1_id: "2", op2_id:"13" },
    { id: 20220642, op1_id: "8", op2_id: "4" },
    { id: 20220644, op1_id: "2", op2_id: "1" },
    { id: 20220646, op1_id: "10", op2_id: "5" },
    { id: 20220648, op1_id: "4", op2_id: "6" },
    { id: 20220650, op1_id: "10", op2_id: "3" },
    { id: 20220651, op1_id: "7", op2_id: "3" },
    { id: 20220652, op1_id: "9", op2_id: "3" },
    { id: 20220653, op1_id: "8", op2_id: "13" },
    { id: 20220654, op1_id: "9", op2_id: "8" },
    { id: 20220655, op1_id: "11", op2_id: "3" },
    { id: 20220656, op1_id: "9", op2_id: "12" },
    { id: 20220657, op1_id: "9", op2_id: "2" },
    { id: 20220658, op1_id: "9", op2_id: "3" },
    { id: 20220659, op1_id: "12", op2_id: "3" },
    { id: 20220661, op1_id: "11", op2_id: "3" },
    { id: 20220662, op1_id: "8", op2_id: "3" },
    { id: 20220663, op1_id: "5", op2_id: "13" },
    { id: 20220664, op1_id: "5", op2_id: "6" },
    { id: 20220665, op1_id: "9", op2_id: "5" },
    { id: 20220666, op1_id: "11", op2_id: "12" },
    { id: 20220667, op1_id: "5", op2_id: "10" },
    { id: 20220668, op1_id: "7", op2_id: "3" },
    { id: 20220669, op1_id: "7", op2_id: "5" },
    { id: 20220670, op1_id: "9", op2_id: "7" },
    { id: 20220671, op1_id: "5", op2_id: "7" },
    { id: 20220672, op1_id: "5", op2_id: "7" },
    { id: 20220673, op1_id: "5", op2_id: "7" },
    { id: 20220674, op1_id: "5", op2_id: "7" },
    { id: 20220675, op1_id: "5", op2_id: "7" },
    { id: 20220676, op1_id: "5", op2_id: "7" },
    { id: 20220677, op1_id: "5", op2_id: "7" },
    { id: 20220678, op1_id: "5", op2_id: "7" },
    { id: 20220679, op1_id: "5", op2_id: "7" },
    { id: 20220680, op1_id: "5", op2_id: "7" },
    { id: 20220680, op1_id: "5", op2_id: "7" },
    { id: 20220682, op1_id: "5", op2_id: "7" },
    { id: 20220683, op1_id: "5", op2_id: "7" },
    { id: 20220684, op1_id: "5", op2_id: "7" },
    { id: 20220685, op1_id: "5", op2_id: "7" },
    { id: 20220686, op1_id: "5", op2_id: "7" },
    { id: 20220687, op1_id: "5", op2_id: "7" },
    { id: 20220688, op1_id: "5", op2_id: "7" },
    { id: 20220689, op1_id: "5", op2_id: "7" },
    { id: 20220690, op1_id: "5", op2_id: "7" },
    { id: 20220691, op1_id: "5", op2_id: "7" },
    { id: 20220692, op1_id: "5", op2_id: "7" },
    { id: 20220693, op1_id: "5", op2_id: "7" },
    { id: 20220694, op1_id: "5", op2_id: "7" },
    { id: 20220695, op1_id: "5", op2_id: "7" },
    { id: 20220696, op1_id: "5", op2_id: "7" },
    { id: 20220697, op1_id: "5", op2_id: "7" },
    { id: 20220698, op1_id: "5", op2_id: "7" },
    { id: 20220699, op1_id: "5", op2_id: "7" },
    { id: 20220100, op1_id: "5", op2_id: "7" },
    { id: 20220101, op1_id: "5", op2_id: "7" },
    { id: 20220102, op1_id: "5", op2_id: "7" },
    { id: 20220103, op1_id: "5", op2_id: "7" },
    { id: 20220104, op1_id: "5", op2_id: "7" },
    { id: 20220105, op1_id: "5", op2_id: "7" },
    { id: 20220106, op1_id: "5", op2_id: "7" },
    { id: 20220107, op1_id: "5", op2_id: "7" },
    { id: 20220108, op1_id: "5", op2_id: "7" },
    { id: 20220109, op1_id: "5", op2_id: "7" },
    { id: 20220110, op1_id: "5", op2_id: "7" },
    { id: 20220111, op1_id: "5", op2_id: "7" },
    { id: 20220112, op1_id: "5", op2_id: "7" },
    { id: 20220113, op1_id: "5", op2_id: "7" },
    { id: 20220114, op1_id: "5", op2_id: "7" },
    { id: 20220115, op1_id: "5", op2_id: "7" },
    { id: 20220116, op1_id: "5", op2_id: "7" },
    { id: 20220117, op1_id: "5", op2_id: "7" },
    { id: 20220118, op1_id: "5", op2_id: "7" },
    { id: 20220119, op1_id: "5", op2_id: "7" },
    { id: 20220120, op1_id: "5", op2_id: "7" },
    { id: 20220121, op1_id: "5", op2_id: "7" },
    { id: 20220122, op1_id: "5", op2_id: "7" },
    { id: 20220123, op1_id: "5", op2_id: "7" },
    { id: 20220124, op1_id: "5", op2_id: "7" },
    { id: 20220125, op1_id: "5", op2_id: "7" },
    { id: 20220126, op1_id: "5", op2_id: "7" },
    { id: 20220127, op1_id: "5", op2_id: "7" },
    { id: 202206128, op1_id: "5", op2_id: "7" },
    { id: 20220129, op1_id: "5", op2_id: "7" },
    { id: 20220130, op1_id: "5", op2_id: "7" },
    { id: 20220131, op1_id: "5", op2_id: "7" },
    { id: 20220132, op1_id: '4', op2_id: '7' },
  { id: 20220133, op1_id: '12', op2_id: '5' },
  { id: 20220134, op1_id: '3', op2_id: '1' },
  { id: 20220135, op1_id: '8', op2_id: '11' },
  { id: 20220136, op1_id: '12', op2_id: '3' },
  { id: 20220137, op1_id: '6', op2_id: '7' },
  { id: 20220138, op1_id: '6', op2_id: '9' },
  { id: 20220139, op1_id: '3', op2_id: '6' },
  { id: 20220140, op1_id: '7', op2_id: '13' },
  { id: 20220141, op1_id: '13', op2_id: '6' },
  { id: 20220142, op1_id: '12', op2_id: '12' },
  { id: 20220143, op1_id: '5', op2_id: '11' },
  { id: 20220144, op1_id: '4', op2_id: '1' },
  { id: 20220145, op1_id: '2', op2_id: '2' },
  { id: 20220146, op1_id: '10', op2_id: '5' },
  { id: 20220147, op1_id: '6', op2_id: '11' },
  { id: 20220148, op1_id: '12', op2_id: '5' },
  { id: 20220149, op1_id: '7', op2_id: '3' },
  { id: 20220150, op1_id: '7', op2_id: '4' },
  { id: 20220151, op1_id: '10', op2_id: '1' },
  { id: 20220152, op1_id: '10', op2_id: '3' },
  { id: 20220153, op1_id: '5', op2_id: '2' },
  { id: 20220154, op1_id: '9', op2_id: '10' },
  { id: 20220155, op1_id: '6', op2_id: '10' },
  { id: 20220156, op1_id: '13', op2_id: '7' },
  { id: 20220157, op1_id: '8', op2_id: '7' },
  { id: 20220158, op1_id: '10', op2_id: '3' },
  { id: 20220159, op1_id: '10', op2_id: '8' },
  { id: 20220160, op1_id: '1', op2_id: '7' },
  { id: 20220161, op1_id: '8', op2_id: '6' },
  { id: 20220162, op1_id: '4', op2_id: '6' },
  { id: 20220163, op1_id: '8', op2_id: '12' },
  { id: 20220164, op1_id: '8', op2_id: '9' },
  { id: 20220165, op1_id: '6', op2_id: '9' },
  { id: 20220166, op1_id: '11', op2_id: '10' },
  { id: 20220167, op1_id: '9', op2_id: '5' },
  { id: 20220168, op1_id: '5', op2_id: '1' },
  { id: 20220169, op1_id: '7', op2_id: '9' },
  { id: 20220170, op1_id: '12', op2_id: '4' },
  { id: 20220171, op1_id: '2', op2_id: '4' },
  { id: 20220172, op1_id: '1', op2_id: '6' },
  { id: 20220173, op1_id: '13', op2_id: '4' },
  { id: 20220174, op1_id: '2', op2_id: '10' },
  { id: 20220175, op1_id: '4', op2_id: '10' },
  { id: 20220176, op1_id: '6', op2_id: '2' },
  { id: 20220177, op1_id: '9', op2_id: '4' },
  { id: 20220178, op1_id: '12', op2_id: '11' },
  { id: 20220179, op1_id: '1', op2_id: '13' },
  { id: 20220180, op1_id: '4', op2_id: '9' },
  { id: 20220181, op1_id: '3', op2_id: '5' },
  { id: 20220182, op1_id: '2', op2_id: '12' },
  { id: 20220183, op1_id: '6', op2_id: '6' },
  { id: 20220184, op1_id: '11', op2_id: '13' },
  { id: 20220185, op1_id: '7', op2_id: '5' },
  { id: 20220186, op1_id: '2', op2_id: '7' },
  { id: 20220187, op1_id: '1', op2_id: '10' },
  { id: 20220188, op1_id: '4', op2_id: '11' },
  { id: 20220189, op1_id: '6', op2_id: '10' },
  { id: 20220190, op1_id: '11', op2_id: '8' },
  { id: 20220191, op1_id: '8', op2_id: '2' },
  { id: 20220192, op1_id: '6', op2_id: '8' },
  { id: 20220193, op1_id: '5', op2_id: '11' },
  { id: 20220194, op1_id: '13', op2_id: '13' },
  { id: 20220195, op1_id: '5', op2_id: '4' },
  { id: 20220196, op1_id: '13', op2_id: '10' },
  { id: 20220197, op1_id: '11', op2_id: '13' },
  { id: 20220198, op1_id: '3', op2_id: '4' },
  { id: 20220199, op1_id: '9', op2_id: '9' },
  { id: 20220200, op1_id: '6', op2_id: '10' },
  { id: 20220201, op1_id: '1', op2_id: '1' },
  { id: 20220202, op1_id: '3', op2_id: '11' },
  { id: 20220203, op1_id: '13', op2_id: '9' },
  { id: 20220204, op1_id: '2', op2_id: '5' },
  { id: 20220205, op1_id: '2', op2_id: '4' },
  { id: 20220206, op1_id: '13', op2_id: '13' },
  { id: 20220207, op1_id: '8', op2_id: '6' },
  { id: 20220208, op1_id: '2', op2_id: '11' },
  { id: 20220209, op1_id: '9', op2_id: '8' },
  { id: 20220210, op1_id: '12', op2_id: '1' },
  { id: 20220211, op1_id: '3', op2_id: '2' },
  { id: 20220212, op1_id: '7', op2_id: '13' },
  { id: 20220213, op1_id: '5', op2_id: '8' },
  { id: 20220214, op1_id: '10', op2_id: '12' },
  { id: 20220215, op1_id: '3', op2_id: '9' },
  { id: 20220216, op1_id: '8', op2_id: '1' },
  { id: 20220217, op1_id: '8', op2_id: '5' },
  { id: 20220218, op1_id: '3', op2_id: '5' },
  { id: 20220219, op1_id: '10', op2_id: '2' },
  { id: 20220220, op1_id: '9', op2_id: '11' },
  { id: 20220221, op1_id: '13', op2_id: '7' },
  { id: 20220222, op1_id: '2', op2_id: '3' },
  { id: 20220223, op1_id: '3', op2_id: '10' },
  { id: 20220224, op1_id: '11', op2_id: '2' },
  { id: 20220225, op1_id: '12', op2_id: '12' },
  { id: 20220226, op1_id: '6', op2_id: '8' },
  { id: 20220227, op1_id: '9', op2_id: '11' },
  { id: 20220228, op1_id: '6', op2_id: '11' },
  { id: 20220229, op1_id: '3', op2_id: '10' },
  { id: 20220230, op1_id: '11', op2_id: '6' },
  { id: 20220231, op1_id: '5', op2_id: '2' },  
  { id: 20220232, op1_id: '4', op2_id: '9' },  
  { id: 20220233, op1_id: '7', op2_id: '9' },  
  { id: 20220234, op1_id: '6', op2_id: '1' },  
  { id: 20220235, op1_id: '12', op2_id: '12' },
  { id: 20220236, op1_id: '9', op2_id: '2' },  
  { id: 20220237, op1_id: '12', op2_id: '11' },
  { id: 20220238, op1_id: '5', op2_id: '7' },  
  { id: 20220239, op1_id: '11', op2_id: '11' },
  { id: 20220240, op1_id: '4', op2_id: '10' },
  { id: 20220241, op1_id: '11', op2_id: '7' },
  { id: 20220242, op1_id: '2', op2_id: '7' },
  { id: 20220243, op1_id: '10', op2_id: '9' },
  { id: 20220244, op1_id: '6', op2_id: '4' },
  { id: 20220245, op1_id: '1', op2_id: '10' },
  { id: 20220246, op1_id: '6', op2_id: '13' },
  { id: 20220247, op1_id: '10', op2_id: '11' },
  { id: 20220248, op1_id: '12', op2_id: '13' },
  { id: 20220249, op1_id: '3', op2_id: '10' },
  { id: 20220250, op1_id: '11', op2_id: '10' },
  { id: 20220251, op1_id: '10', op2_id: '2' },
  { id: 20220252, op1_id: '9', op2_id: '12' },
  { id: 20220253, op1_id: '4', op2_id: '11' },
  { id: 20220254, op1_id: '5', op2_id: '11' },
  { id: 20220255, op1_id: '2', op2_id: '6' },
  { id: 20220256, op1_id: '4', op2_id: '10' },
  { id: 20220257, op1_id: '13', op2_id: '6' },
  { id: 20220258, op1_id: '2', op2_id: '7' },
  { id: 20220259, op1_id: '11', op2_id: '11' },
  { id: 20220260, op1_id: '13', op2_id: '11' },
  { id: 20220261, op1_id: '10', op2_id: '6' },
  { id: 20220262, op1_id: '12', op2_id: '7' },
  { id: 20220263, op1_id: '11', op2_id: '12' },
  { id: 20220264, op1_id: '10', op2_id: '10' },
  { id: 20220265, op1_id: '8', op2_id: '7' },
  { id: 20220266, op1_id: '9', op2_id: '5' },
  { id: 20220267, op1_id: '10', op2_id: '5' },
  { id: 20220268, op1_id: '12', op2_id: '13' },
  { id: 20220269, op1_id: '13', op2_id: '3' },
  { id: 20220270, op1_id: '5', op2_id: '4' },
  { id: 20220271, op1_id: '10', op2_id: '2' },
  { id: 20220272, op1_id: '2', op2_id: '1' },
  { id: 20220273, op1_id: '13', op2_id: '2' },
  { id: 20220274, op1_id: '4', op2_id: '3' },
  { id: 20220275, op1_id: '7', op2_id: '7' },
  { id: 20220276, op1_id: '7', op2_id: '2' },
  { id: 20220277, op1_id: '10', op2_id: '7' },
  { id: 20220278, op1_id: '9', op2_id: '6' },
  { id: 20220279, op1_id: '5', op2_id: '10' },
  { id: 20220280, op1_id: '9', op2_id: '2' },
  { id: 20220281, op1_id: '4', op2_id: '11' },
  { id: 20220282, op1_id: '6', op2_id: '2' },
  { id: 20220283, op1_id: '11', op2_id: '10' },
  { id: 20220284, op1_id: '11', op2_id: '6' },
  { id: 20220285, op1_id: '4', op2_id: '8' },
  { id: 20220286, op1_id: '1', op2_id: '10' },
  { id: 20220287, op1_id: '4', op2_id: '11' },
  { id: 20220288, op1_id: '7', op2_id: '4' },
  { id: 20220289, op1_id: '1', op2_id: '7' },
  { id: 20220290, op1_id: '6', op2_id: '12' },
  { id: 20220291, op1_id: '8', op2_id: '2' },
  { id: 20220292, op1_id: '2', op2_id: '10' },
  { id: 20220293, op1_id: '6', op2_id: '9' },
  { id: 20220294, op1_id: '9', op2_id: '13' },
  { id: 20220295, op1_id: '3', op2_id: '1' },
  { id: 20220296, op1_id: '4', op2_id: '1' },
  { id: 20220297, op1_id: '1', op2_id: '3' },
  { id: 20220298, op1_id: '8', op2_id: '3' },
  { id: 20220299, op1_id: '2', op2_id: '5' },
  { id: 20220300, op1_id: '1', op2_id: '11' },
  { id: 20220301, op1_id: '8', op2_id: '7' },
  { id: 20220302, op1_id: '11', op2_id: '7' },
  { id: 20220303, op1_id: '2', op2_id: '10' },
  { id: 20220304, op1_id: '13', op2_id: '1' },
  { id: 20220305, op1_id: '5', op2_id: '12' },
  { id: 20220306, op1_id: '11', op2_id: '6' },
  { id: 20220307, op1_id: '13', op2_id: '13' },
  { id: 20220308, op1_id: '10', op2_id: '3' },
  { id: 20220309, op1_id: '10', op2_id: '9' },
  { id: 20220310, op1_id: '8', op2_id: '4' },
  { id: 20220311, op1_id: '7', op2_id: '2' },
  { id: 20220312, op1_id: '3', op2_id: '1' },
  { id: 20220313, op1_id: '5', op2_id: '1' },
  { id: 20220314, op1_id: '4', op2_id: '12' },
  { id: 20220315, op1_id: '7', op2_id: '7' },
  { id: 20220316, op1_id: '6', op2_id: '11' },
  { id: 20220317, op1_id: '8', op2_id: '6' },
  { id: 20220318, op1_id: '9', op2_id: '9' },
  { id: 20220319, op1_id: '11', op2_id: '3' },
  { id: 20220320, op1_id: '4', op2_id: '8' },
  { id: 20220321, op1_id: '3', op2_id: '4' },
  { id: 20220322, op1_id: '4', op2_id: '1' },
  { id: 20220323, op1_id: '13', op2_id: '12' },
  { id: 20220324, op1_id: '12', op2_id: '13' },
  { id: 20220325, op1_id: '9', op2_id: '12' },
  { id: 20220326, op1_id: '8', op2_id: '12' },
  { id: 20220327, op1_id: '5', op2_id: '13' },
  { id: 20220328, op1_id: '13', op2_id: '10' },
  { id: 20220329, op1_id: '3', op2_id: '9' },
  { id: 20220330, op1_id: '7', op2_id: '10' },
  { id: 20220331, op1_id: '12', op2_id: '6' },
  { id: 20220332, op1_id: '7', op2_id: '13' },
  { id: 20220333, op1_id: '11', op2_id: '8' },
  { id: 20220334, op1_id: '5', op2_id: '13' },
  { id: 20220335, op1_id: '1', op2_id: '11' },
  { id: 20220336, op1_id: '10', op2_id: '12' },
  { id: 20220337, op1_id: '11', op2_id: '7' },
  { id: 20220338, op1_id: '8', op2_id: '13' },
  { id: 20220339, op1_id: '7', op2_id: '8' },
  { id: 20220340, op1_id: '4', op2_id: '4' },
  { id: 20220341, op1_id: '2', op2_id: '13' },
  { id: 20220342, op1_id: '5', op2_id: '2' },
  { id: 20220343, op1_id: '6', op2_id: '2' },
  { id: 20220344, op1_id: '10', op2_id: '6' },
  { id: 20220345, op1_id: '10', op2_id: '11' },
  { id: 20220346, op1_id: '10', op2_id: '8' },
  { id: 20220347, op1_id: '10', op2_id: '13' },
  { id: 20220348, op1_id: '4', op2_id: '1' },
  { id: 20220349, op1_id: '2', op2_id: '3' },
  { id: 20220350, op1_id: '5', op2_id: '2' },
  { id: 20220351, op1_id: '4', op2_id: '5' },
  { id: 20220352, op1_id: '3', op2_id: '1' },
  { id: 20220353, op1_id: '8', op2_id: '9' },
  { id: 20220354, op1_id: '1', op2_id: '10' },
  { id: 20220355, op1_id: '2', op2_id: '8' },
  { id: 20220356, op1_id: '7', op2_id: '5' },
  { id: 20220357, op1_id: '9', op2_id: '2' },
  { id: 20220358, op1_id: '9', op2_id: '1' },
  { id: 20220359, op1_id: '1', op2_id: '6' },
  { id: 20220360, op1_id: '12', op2_id: '4' },
  { id: 20220361, op1_id: '1', op2_id: '1' },
  { id: 20220362, op1_id: '5', op2_id: '7' },
  { id: 20220363, op1_id: '5', op2_id: '4' },
  { id: 20220364, op1_id: '6', op2_id: '7' },
  { id: 20220365, op1_id: '1', op2_id: '8' },
  { id: 20220366, op1_id: '5', op2_id: '11' },
  { id: 20220367, op1_id: '2', op2_id: '13' },
  { id: 20220368, op1_id: '11', op2_id: '13' },
  { id: 20220369, op1_id: '13', op2_id: '11' },
  { id: 20220370, op1_id: '11', op2_id: '2' },
  { id: 20220371, op1_id: '8', op2_id: '2' },
  { id: 20220372, op1_id: '8', op2_id: '2' },
  { id: 20220373, op1_id: '12', op2_id: '5' },
  { id: 20220374, op1_id: '13', op2_id: '13' },
  { id: 20220375, op1_id: '12', op2_id: '8' },
  { id: 20220376, op1_id: '3', op2_id: '5' },
  { id: 20220377, op1_id: '2', op2_id: '6' },
  { id: 20220378, op1_id: '5', op2_id: '7' },
  { id: 20220379, op1_id: '12', op2_id: '11' },
  { id: 20220380, op1_id: '13', op2_id: '11' },
  { id: 20220381, op1_id: '1', op2_id: '5' },
  { id: 20220382, op1_id: '9', op2_id: '3' },
  { id: 20220383, op1_id: '6', op2_id: '9' },
  { id: 20220384, op1_id: '2', op2_id: '7' },
  { id: 20220385, op1_id: '9', op2_id: '5' },
  { id: 20220386, op1_id: '13', op2_id: '7' },
  { id: 20220387, op1_id: '5', op2_id: '10' },
  { id: 20220388, op1_id: '7', op2_id: '1' },
  { id: 20220389, op1_id: '10', op2_id: '7' },
  { id: 20220390, op1_id: '13', op2_id: '5' },
  { id: 20220391, op1_id: '7', op2_id: '3' },
  { id: 20220392, op1_id: '12', op2_id: '2' },
  { id: 20220393, op1_id: '2', op2_id: '7' },
  { id: 20220394, op1_id: '6', op2_id: '10' },
  { id: 20220395, op1_id: '7', op2_id: '6' },
  { id: 20220396, op1_id: '3', op2_id: '10' },
  { id: 20220397, op1_id: '2', op2_id: '9' },
  { id: 20220398, op1_id: '4', op2_id: '5' },
  { id: 20220399, op1_id: '7', op2_id: '10' },
  { id: 20220400, op1_id: '2', op2_id: '5' },
  { id: 20220401, op1_id: '1', op2_id: '12' },
  { id: 20220402, op1_id: '7', op2_id: '3' },
  { id: 20220403, op1_id: '4', op2_id: '2' },
  { id: 20220404, op1_id: '3', op2_id: '5' },
  { id: 20220405, op1_id: '6', op2_id: '8' },
  { id: 20220406, op1_id: '11', op2_id: '11' },
  { id: 20220407, op1_id: '10', op2_id: '13' },
  { id: 20220408, op1_id: '2', op2_id: '4' },
  { id: 20220409, op1_id: '7', op2_id: '8' },
  { id: 20220410, op1_id: '13', op2_id: '13' },
  { id: 20220411, op1_id: '9', op2_id: '5' },
  { id: 20220412, op1_id: '6', op2_id: '13' },
  { id: 20220413, op1_id: '12', op2_id: '12' },
  { id: 20220414, op1_id: '11', op2_id: '1' },
  { id: 20220415, op1_id: '12', op2_id: '1' },
  { id: 20220416, op1_id: '6', op2_id: '10' },
  { id: 20220417, op1_id: '2', op2_id: '8' },
  { id: 20220418, op1_id: '4', op2_id: '4' },
  { id: 20220419, op1_id: '4', op2_id: '2' },
  { id: 20220420, op1_id: '7', op2_id: '5' },
  { id: 20220421, op1_id: '11', op2_id: '13' },
  { id: 20220422, op1_id: '13', op2_id: '5' },
  { id: 20220423, op1_id: '6', op2_id: '11' },
  { id: 20220424, op1_id: '11', op2_id: '11' },
  { id: 20220425, op1_id: '13', op2_id: '11' },
  { id: 20220426, op1_id: '7', op2_id: '2' },
  { id: 20220427, op1_id: '8', op2_id: '6' },
  { id: 20220428, op1_id: '11', op2_id: '11' },
  { id: 20220429, op1_id: '12', op2_id: '8' },
  { id: 20220430, op1_id: '12', op2_id: '8' },
  { id: 20220431, op1_id: '9', op2_id: '5' },
  { id: 20220432, op1_id: '10', op2_id: '13' },
  { id: 20220433, op1_id: '9', op2_id: '9' },
  { id: 20220434, op1_id: '13', op2_id: '5' },
  { id: 20220435, op1_id: '8', op2_id: '10' },
  { id: 20220436, op1_id: '8', op2_id: '2' },
  { id: 20220437, op1_id: '11', op2_id: '1' },
  { id: 20220438, op1_id: '8', op2_id: '1' },
  { id: 20220439, op1_id: '5', op2_id: '9' },
  { id: 20220440, op1_id: '6', op2_id: '8' },
  { id: 20220441, op1_id: '3', op2_id: '5' },
  { id: 20220442, op1_id: '13', op2_id: '12' },
  { id: 20220443, op1_id: '4', op2_id: '7' },
  { id: 20220444, op1_id: '5', op2_id: '10' },
  { id: 20220445, op1_id: '1', op2_id: '12' },
  { id: 20220446, op1_id: '7', op2_id: '1' },
  { id: 20220447, op1_id: '2', op2_id: '10' },
  { id: 20220448, op1_id: '8', op2_id: '13' },
  { id: 20220449, op1_id: '8', op2_id: '11' },
  { id: 20220450, op1_id: '8', op2_id: '8' },
  { id: 20220451, op1_id: '3', op2_id: '11' },
  { id: 20220452, op1_id: '9', op2_id: '6' },
  { id: 20220453, op1_id: '8', op2_id: '10' },
  { id: 20220454, op1_id: '4', op2_id: '3' },
  { id: 20220455, op1_id: '11', op2_id: '13' },
  { id: 20220456, op1_id: '12', op2_id: '13' },
  { id: 20220457, op1_id: '8', op2_id: '3' },
  { id: 20220458, op1_id: '8', op2_id: '11' },
  { id: 20220459, op1_id: '13', op2_id: '3' },
  { id: 20220460, op1_id: '8', op2_id: '12' },
  { id: 20220461, op1_id: '2', op2_id: '11' },
  { id: 20220462, op1_id: '9', op2_id: '11' },
  { id: 20220463, op1_id: '12', op2_id: '3' },
  { id: 20220464, op1_id: '9', op2_id: '2' },
  { id: 20220465, op1_id: '2', op2_id: '13' },
  { id: 20220466, op1_id: '12', op2_id: '9' },
  { id: 20220467, op1_id: '4', op2_id: '7' },
  { id: 20220468, op1_id: '9', op2_id: '2' },
  { id: 20220469, op1_id: '6', op2_id: '9' },
  { id: 20220470, op1_id: '1', op2_id: '5' },
  { id: 20220471, op1_id: '2', op2_id: '7' },
  { id: 20220472, op1_id: '5', op2_id: '4' },
  { id: 20220473, op1_id: '1', op2_id: '11' },
  { id: 20220474, op1_id: '6', op2_id: '10' },
  { id: 20220475, op1_id: '1', op2_id: '7' },
  { id: 20220476, op1_id: '2', op2_id: '3' },
  { id: 20220477, op1_id: '13', op2_id: '1' },
  { id: 20220478, op1_id: '5', op2_id: '3' },
  { id: 20220479, op1_id: '9', op2_id: '13' },
  { id: 20220480, op1_id: '8', op2_id: '5' },
  { id: 20220481, op1_id: '13', op2_id: '5' },
  { id: 20220482, op1_id: '4', op2_id: '5' },
  { id: 20220483, op1_id: '9', op2_id: '3' },
  { id: 20220484, op1_id: '8', op2_id: '11' },
  { id: 20220485, op1_id: '1', op2_id: '13' },
  { id: 20220486, op1_id: '12', op2_id: '12' },
  { id: 20220487, op1_id: '10', op2_id: '6' },
  { id: 20220488, op1_id: '6', op2_id: '5' },
  { id: 20220489, op1_id: '9', op2_id: '5' },
  { id: 20220490, op1_id: '4', op2_id: '12' },
  { id: 20220491, op1_id: '8', op2_id: '7' },
  { id: 20220492, op1_id: '2', op2_id: '5' },
  { id: 20220493, op1_id: '7', op2_id: '4' },
  { id: 20220494, op1_id: '5', op2_id: '1' },
  { id: 20220495, op1_id: '1', op2_id: '8' },
  { id: 20220496, op1_id: '7', op2_id: '5' },
  { id: 20220497, op1_id: '7', op2_id: '6' },
  { id: 20220498, op1_id: '1', op2_id: '7' },
  { id: 20220499, op1_id: '10', op2_id: '6' },
  { id: 20220500, op1_id: '12', op2_id: '5' },
  { id: 20220501, op1_id: '7', op2_id: '2' },
  { id: 20220502, op1_id: '9', op2_id: '6' },
  { id: 20220503, op1_id: '4', op2_id: '11' },
  { id: 20220504, op1_id: '9', op2_id: '10' },
  { id: 20220505, op1_id: '9', op2_id: '5' },
  { id: 20220506, op1_id: '13', op2_id: '12' },
  { id: 20220507, op1_id: '7', op2_id: '12' },
  { id: 20220508, op1_id: '1', op2_id: '2' },
  { id: 20220509, op1_id: '3', op2_id: '7' },
  { id: 20220510, op1_id: '6', op2_id: '13' },
  { id: 20220511, op1_id: '10', op2_id: '4' },
  { id: 20220512, op1_id: '10', op2_id: '3' },
  { id: 20220513, op1_id: '4', op2_id: '9' },
  { id: 20220514, op1_id: '4', op2_id: '2' },
  { id: 20220515, op1_id: '13', op2_id: '12' },
  { id: 20220516, op1_id: '7', op2_id: '2' },
  { id: 20220517, op1_id: '1', op2_id: '13' },
  { id: 20220518, op1_id: '5', op2_id: '7' },
  { id: 20220519, op1_id: '9', op2_id: '3' },
  { id: 20220520, op1_id: '1', op2_id: '10' },
  { id: 20220521, op1_id: '5', op2_id: '12' },
  { id: 20220522, op1_id: '13', op2_id: '4' },
  { id: 20220523, op1_id: '10', op2_id: '9' },
  { id: 20220524, op1_id: '5', op2_id: '13' },
  { id: 20220525, op1_id: '10', op2_id: '8' },
  { id: 20220526, op1_id: '8', op2_id: '2' },
  { id: 20220527, op1_id: '10', op2_id: '11' },
  { id: 20220528, op1_id: '1', op2_id: '9' },
  { id: 20220529, op1_id: '10', op2_id: '12' },
  { id: 20220530, op1_id: '11', op2_id: '3' },
  { id: 20220531, op1_id: '13', op2_id: '1' },
  { id: 20220532, op1_id: '8', op2_id: '9' },
  { id: 20220533, op1_id: '7', op2_id: '13' },
  { id: 20220534, op1_id: '2', op2_id: '10' },
  { id: 20220535, op1_id: '10', op2_id: '7' },
  { id: 20220536, op1_id: '9', op2_id: '7' },
  { id: 20220537, op1_id: '7', op2_id: '4' },
  { id: 20220538, op1_id: '11', op2_id: '5' },
  { id: 20220539, op1_id: '7', op2_id: '4' },
  { id: 20220540, op1_id: '12', op2_id: '9' },
  { id: 20220541, op1_id: '3', op2_id: '11' },
  { id: 20220542, op1_id: '8', op2_id: '8' },
  { id: 20220543, op1_id: '4', op2_id: '7' },
  { id: 20220544, op1_id: '2', op2_id: '2' },
  { id: 20220545, op1_id: '2', op2_id: '3' },
  { id: 20220546, op1_id: '4', op2_id: '1' },
  { id: 20220547, op1_id: '6', op2_id: '8' },
  { id: 20220548, op1_id: '6', op2_id: '8' },
  { id: 20220549, op1_id: '7', op2_id: '9' },
  { id: 20220550, op1_id: '4', op2_id: '3' },
  { id: 20220551, op1_id: '13', op2_id: '3' },
  { id: 20220552, op1_id: '5', op2_id: '9' },
  { id: 20220553, op1_id: '7', op2_id: '4' },
  { id: 20220554, op1_id: '2', op2_id: '9' },
  { id: 20220555, op1_id: '2', op2_id: '6' },
  { id: 20220556, op1_id: '9', op2_id: '1' },
  { id: 20220557, op1_id: '13', op2_id: '10' },
  { id: 20220558, op1_id: '3', op2_id: '11' },
  { id: 20220559, op1_id: '5', op2_id: '5' },
  { id: 20220560, op1_id: '2', op2_id: '13' },
  { id: 20220561, op1_id: '1', op2_id: '13' },
  { id: 20220562, op1_id: '11', op2_id: '10' },
  { id: 20220563, op1_id: '8', op2_id: '4' },
  { id: 20220564, op1_id: '1', op2_id: '2' },
  { id: 20220565, op1_id: '6', op2_id: '5' },
  { id: 20220566, op1_id: '11', op2_id: '3' },
  { id: 20220567, op1_id: '11', op2_id: '11' },
  { id: 20220568, op1_id: '12', op2_id: '3' },
  { id: 20220569, op1_id: '2', op2_id: '2' },
  { id: 20220570, op1_id: '9', op2_id: '7' },
  { id: 20220571, op1_id: '7', op2_id: '13' },
  { id: 20220572, op1_id: '2', op2_id: '5' },
  { id: 20220573, op1_id: '9', op2_id: '7' },
  { id: 20220574, op1_id: '2', op2_id: '6' },
  { id: 20220575, op1_id: '4', op2_id: '1' },
  { id: 20220576, op1_id: '12', op2_id: '1' },
  { id: 20220577, op1_id: '11', op2_id: '8' },
  { id: 20220578, op1_id: '13', op2_id: '5' },
  { id: 20220579, op1_id: '12', op2_id: '2' },
  { id: 20220580, op1_id: '3', op2_id: '9' },
  { id: 20220581, op1_id: '11', op2_id: '10' },
  { id: 20220582, op1_id: '11', op2_id: '3' },
  { id: 20220583, op1_id: '9', op2_id: '9' },
  { id: 20220584, op1_id: '8', op2_id: '7' },
  { id: 20220585, op1_id: '7', op2_id: '10' },
  { id: 20220586, op1_id: '13', op2_id: '13' },
  { id: 20220587, op1_id: '1', op2_id: '6' },
  { id: 20220588, op1_id: '2', op2_id: '5' },
  { id: 20220589, op1_id: '11', op2_id: '12' },
  { id: 20220590, op1_id: '10', op2_id: '8' },
  { id: 20220591, op1_id: '4', op2_id: '9' },
  { id: 20220592, op1_id: '4', op2_id: '11' },
  { id: 20220593, op1_id: '4', op2_id: '1' },
  { id: 20220594, op1_id: '6', op2_id: '5' },
  { id: 20220595, op1_id: '13', op2_id: '10' },
  { id: 20220596, op1_id: '8', op2_id: '12' },
  { id: 20220597, op1_id: '5', op2_id: '12' },
  { id: 20220598, op1_id: '9', op2_id: '1' },
  { id: 20220599, op1_id: '10', op2_id: '11' },
  { id: 20220600, op1_id: '6', op2_id: '9' },
  { id: 20220601, op1_id: '6', op2_id: '12' },
  { id: 20220602, op1_id: '1', op2_id: '8' },
  { id: 20220603, op1_id: '5', op2_id: '13' },
  { id: 20220604, op1_id: '6', op2_id: '12' },
  { id: 20220605, op1_id: '3', op2_id: '8' },
  { id: 20220606, op1_id: '13', op2_id: '4' },
  { id: 20220607, op1_id: '5', op2_id: '10' },
  { id: 20220608, op1_id: '8', op2_id: '8' },
  { id: 20220609, op1_id: '2', op2_id: '12' },
  { id: 20220610, op1_id: '11', op2_id: '2' },
  { id: 20220611, op1_id: '9', op2_id: '9' },
  { id: 20220612, op1_id: '3', op2_id: '3' },
  { id: 20220700, op1_id: '12', op2_id: '1' },
  { id: 20220701, op1_id: '10', op2_id: '4' },
  { id: 20220702, op1_id: '3', op2_id: '3' },
  { id: 20220703, op1_id: '1', op2_id: '3' },
  { id: 20220704, op1_id: '7', op2_id: '9' },
  { id: 20220705, op1_id: '12', op2_id: '10' },
  { id: 20220706, op1_id: '5', op2_id: '13' },
  { id: 20220707, op1_id: '5', op2_id: '1' },
  { id: 20220708, op1_id: '5', op2_id: '1' },
  { id: 20220709, op1_id: '2', op2_id: '2' },
  { id: 20220710, op1_id: '13', op2_id: '11' },
  { id: 20220711, op1_id: '4', op2_id: '13' },
  { id: 20220712, op1_id: '8', op2_id: '6' },
  { id: 20220713, op1_id: '1', op2_id: '8' },
  { id: 20220714, op1_id: '8', op2_id: '6' },
  { id: 20220715, op1_id: '11', op2_id: '3' },
  { id: 20220716, op1_id: '6', op2_id: '7' },
  { id: 20220717, op1_id: '13', op2_id: '7' },
  { id: 20220718, op1_id: '13', op2_id: '8' },
  { id: 20220719, op1_id: '11', op2_id: '12' },
  { id: 20220720, op1_id: '5', op2_id: '8' },
  { id: 20220721, op1_id: '2', op2_id: '4' },
  { id: 20220722, op1_id: '12', op2_id: '5' },
  { id: 20220723, op1_id: '8', op2_id: '5' },
  { id: 20220724, op1_id: '9', op2_id: '8' },
  { id: 20220725, op1_id: '7', op2_id: '7' },
  { id: 20220726, op1_id: '6', op2_id: '10' },
  { id: 20220727, op1_id: '1', op2_id: '13' },
  { id: 20220728, op1_id: '6', op2_id: '3' },
  { id: 20220729, op1_id: '11', op2_id: '5' },
  { id: 20220730, op1_id: '4', op2_id: '13' },
  { id: 20220731, op1_id: '6', op2_id: '11' },
  { id: 20220732, op1_id: '9', op2_id: '11' },
  { id: 20220733, op1_id: '10', op2_id: '9' },
  { id: 20220734, op1_id: '5', op2_id: '9' },
  { id: 20220735, op1_id: '3', op2_id: '6' },
  { id: 20220736, op1_id: '11', op2_id: '12' },
  { id: 20220737, op1_id: '10', op2_id: '9' },
  { id: 20220738, op1_id: '7', op2_id: '4' },
  { id: 20220739, op1_id: '12', op2_id: '5' },
  { id: 20220740, op1_id: '3', op2_id: '12' },
  { id: 20220741, op1_id: '13', op2_id: '10' },
  { id: 20220742, op1_id: '10', op2_id: '11' },
  { id: 20220743, op1_id: '4', op2_id: '8' },
  { id: 20220744, op1_id: '3', op2_id: '4' },
  { id: 20220745, op1_id: '13', op2_id: '4' },
  { id: 20220746, op1_id: '13', op2_id: '4' },
  { id: 20220747, op1_id: '6', op2_id: '5' },
  { id: 20220748, op1_id: '1', op2_id: '8' },
  { id: 20220749, op1_id: '4', op2_id: '8' },
  { id: 20220750, op1_id: '11', op2_id: '13' },
  { id: 20220751, op1_id: '2', op2_id: '11' },
//   { id: 20220752, op1_id: '4', op2_id: '6' },
//   { id: 20220753, op1_id: '10', op2_id: '8' },
//   { id: 20220754, op1_id: '5', op2_id: '1' },
//   { id: 20220755, op1_id: '2', op2_id: '2' },
//   { id: 20220756, op1_id: '2', op2_id: '6' },
//   { id: 20220757, op1_id: '6', op2_id: '13' },
//   { id: 20220758, op1_id: '11', op2_id: '5' },
//   { id: 20220759, op1_id: '5', op2_id: '11' },
//   { id: 20220760, op1_id: '4', op2_id: '1' },
//   { id: 20220761, op1_id: '11', op2_id: '4' },
//   { id: 20220762, op1_id: '13', op2_id: '12' },
//   { id: 20220763, op1_id: '9', op2_id: '5' },
//   { id: 20220764, op1_id: '3', op2_id: '10' },
//   { id: 20220765, op1_id: '5', op2_id: '2' },
//   { id: 20220766, op1_id: '11', op2_id: '10' },
//   { id: 20220767, op1_id: '8', op2_id: '2' },
//   { id: 20220768, op1_id: '9', op2_id: '1' },
//   { id: 20220769, op1_id: '6', op2_id: '13' },
//   { id: 20220770, op1_id: '7', op2_id: '6' },
//   { id: 20220771, op1_id: '9', op2_id: '8' },
//   { id: 20220772, op1_id: '7', op2_id: '11' },
//   { id: 20220773, op1_id: '13', op2_id: '1' },
//   { id: 20220774, op1_id: '8', op2_id: '5' },
//   { id: 20220775, op1_id: '3', op2_id: '12' },
//   { id: 20220776, op1_id: '7', op2_id: '9' },
//   { id: 20220777, op1_id: '5', op2_id: '1' },
//   { id: 20220778, op1_id: '12', op2_id: '8' },
//   { id: 20220779, op1_id: '13', op2_id: '3' },
//   { id: 20220780, op1_id: '10', op2_id: '12' },
//   { id: 20220781, op1_id: '9', op2_id: '7' },
//   { id: 20220782, op1_id: '9', op2_id: '9' },
//   { id: 20220783, op1_id: '6', op2_id: '6' },
//   { id: 20220784, op1_id: '6', op2_id: '10' },
//   { id: 20220785, op1_id: '9', op2_id: '7' },
//   { id: 20220786, op1_id: '12', op2_id: '8' },
//   { id: 20220787, op1_id: '1', op2_id: '4' },
//   { id: 20220788, op1_id: '9', op2_id: '3' },
//   { id: 20220789, op1_id: '8', op2_id: '12' },
//   { id: 20220790, op1_id: '3', op2_id: '10' },
//   { id: 20220791, op1_id: '5', op2_id: '4' },
//   { id: 20220792, op1_id: '4', op2_id: '1' },
//   { id: 20220793, op1_id: '5', op2_id: '3' },
//   { id: 20220794, op1_id: '3', op2_id: '3' },
//   { id: 20220795, op1_id: '3', op2_id: '6' },
//   { id: 20220796, op1_id: '11', op2_id: '1' },
//   { id: 20220797, op1_id: '9', op2_id: '13' },
//   { id: 20220798, op1_id: '4', op2_id: '9' },
//   { id: 20220799, op1_id: '7', op2_id: '6' },
//   { id: 20220800, op1_id: '1', op2_id: '7' },
//   { id: 20220801, op1_id: '7', op2_id: '7' },
//   { id: 20220802, op1_id: '12', op2_id: '1' },
//   { id: 20220803, op1_id: '9', op2_id: '8' },
//   { id: 20220804, op1_id: '3', op2_id: '12' },
//   { id: 20220805, op1_id: '5', op2_id: '13' },
//   { id: 20220806, op1_id: '5', op2_id: '3' },
//   { id: 20220807, op1_id: '12', op2_id: '6' },
//   { id: 20220808, op1_id: '12', op2_id: '13' },
//   { id: 20220809, op1_id: '4', op2_id: '10' },
//   { id: 20220810, op1_id: '3', op2_id: '3' },
//   { id: 20220811, op1_id: '7', op2_id: '5' },
//   { id: 20220812, op1_id: '1', op2_id: '12' },
//   { id: 20220813, op1_id: '5', op2_id: '10' },
//   { id: 20220814, op1_id: '1', op2_id: '5' },
//   { id: 20220815, op1_id: '6', op2_id: '6' },
//   { id: 20220816, op1_id: '2', op2_id: '8' },
//   { id: 20220817, op1_id: '5', op2_id: '12' },
//   { id: 20220818, op1_id: '3', op2_id: '4' },
//   { id: 20220819, op1_id: '11', op2_id: '7' },
//   { id: 20220820, op1_id: '4', op2_id: '11' },
//   { id: 20220821, op1_id: '11', op2_id: '7' },
//   { id: 20220822, op1_id: '1', op2_id: '10' },
//   { id: 20220823, op1_id: '8', op2_id: '2' },
//   { id: 20220824, op1_id: '7', op2_id: '5' },
//   { id: 20220825, op1_id: '12', op2_id: '10' },
//   { id: 20220826, op1_id: '13', op2_id: '7' },
//   { id: 20220827, op1_id: '6', op2_id: '12' },
//   { id: 20220828, op1_id: '5', op2_id: '6' },
//   { id: 20220829, op1_id: '9', op2_id: '3' },
];

console.log(students.length);

// all modules in 1st semester
const studentsAllmodulesInFirstSemester = students.filter(student =>{
    const op1_module=Optional_modules.find(module =>
        module.module_id === student.op1_id
    );
    const op2_module =Optional_modules.find(module =>
        module.module_id === student.op2_id
    );

    return op1_module && op2_module && op1_module.semester==="1 semester" && op2_module.semester==="1 semester";
});

//all modules in 2nd semester

const studentsAllmodulesInSecondSemester = students.filter(student =>{
    const op1_module = Optional_modules.find(module =>
        module.module_id=== student.op1_id
    )

    const  op2_module =Optional_modules.find(module =>
        module.module_id===student.op2_id
    )
    return op1_module && op2_module && op1_module.semester==="2 semester" && op2_module.semester==="2 semester";
});

// 1st sem and 2nd sem
const FirstSem_andSecondSem = students.filter(student => {
    const op1_module = Optional_modules.find(module =>
        module.module_id === student.op1_id
    );

    const op2_module = Optional_modules.find(module =>
        module.module_id === student.op2_id
    );

    return op1_module && op2_module &&
        ((op1_module.semester === "1 semester" && op2_module.semester === "2 semester") ||
            (op1_module.semester === "2 semester" && op2_module.semester === "1 semester"));
});


// --------Filter students for create groups in 1sem all Modules Students

//Module with ACD

const Group_Sem_One_G1 = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "4" && student.op2_id === "5") ||
        (student.op1_id === "5" && student.op2_id === "4");
});
const Group_Sem_One_G2 = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "4" && student.op2_id === "8") ||
        (student.op1_id === "8" && student.op2_id === "4");
});
const Group_Sem_One_G3 = studentsAllmodulesInFirstSemester.filter(student=>{
        return (student.op1_id==="4" && student.op2_id==="11") ||
        (student.op1_id==="11" && student.op2_id==="4")
    })
const Group_Sem_One_G4 = studentsAllmodulesInFirstSemester.filter(student =>{
    return((student.op1_id==="4" && student.op2_id==="9")||
        (student.op1_id==="9" && student.op2_id==="4"))
})
const Group_Sem_One_G5=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="4" && student.op2_id==="7")||
        (student.op1_id==="7" && student.op2_id==="4")
})
const Group_Sem_One_G6=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="4" && student.op2_id==="13")||
        (student.op1_id==="13" && student.op2_id==="4")
})

// console.log("Advancsd Cli and HCI :"+Group_Sem_One_G1);
// console.log("Advancsd Cli and 3DIn :"+Group_Sem_One_G2);
// console.log("Advancsd Cli and ITS :"+Group_Sem_One_G3);
// console.log("Advancsd Cli and Game :"+Group_Sem_One_G4);
// console.log("Advancsd Cli and Rbtics :"+Group_Sem_One_G5);
// console.log("Advancsd Cli and Sens :"+Group_Sem_One_G6);
console.log("-------ACD MAin---------")
const ACD_Main={
    Group_Sem_One_G1,
    Group_Sem_One_G2,
    Group_Sem_One_G3,
    Group_Sem_One_G4,
    Group_Sem_One_G5,
    Group_Sem_One_G6
}
console.log(ACD_Main);


//Module HCI

const Group_Sem_One_G7=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="8")||
        (student.op1_id==="8" && student.op2_id==="5")
})
const Group_Sem_One_G8=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="11")||
        (student.op1_id==="11" && student.op2_id==="5")
})
const Group_Sem_One_G9=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="9")||
        (student.op1_id==="9" && student.op2_id==="5")
})
const Group_Sem_One_G10=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="7")||
        (student.op1_id==="7" && student.op2_id==="5")
})
const Group_Sem_One_G11=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="13")||
        (student.op1_id==="13" && student.op2_id==="5")
})

// console.log("HCI and 3D :"+Group_Sem_One_G7);
// console.log("HCI and ITS :"+Group_Sem_One_G8);
// console.log("HCI and Game :"+Group_Sem_One_G9);
// console.log("HCI and Robotics :"+Group_Sem_One_G10);
// console.log("HCI and Sens :"+Group_Sem_One_G11);
console.log("----------HCI Main------")
const HCI_Main={
    Group_Sem_One_G7,
    Group_Sem_One_G8,
    Group_Sem_One_G9,
    Group_Sem_One_G10,
    Group_Sem_One_G11
}
console.log(HCI_Main);


//Modules 3D

const Group_Sem_One_G12=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="11")||
        (student.op1_id==="11" && student.op2_id==="8")
})
const Group_Sem_One_G13=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="9")||
        (student.op1_id==="9" && student.op2_id==="8")
})
const Group_Sem_One_G14=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="7")||
        (student.op1_id==="7" && student.op2_id==="8")
})
const Group_Sem_One_G15=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="13")||
        (student.op1_id==="13" && student.op2_id==="8")
})

// console.log("3D and ITS :"+Group_Sem_One_G12);
// console.log("3D and Game :"+Group_Sem_One_G13);
// console.log("3D and Rbtics :"+Group_Sem_One_G14);
// console.log("3D and Sens :"+Group_Sem_One_G15);
console.log("---------3D---------")
const ThreeD_Main={

    Group_Sem_One_G12,
    Group_Sem_One_G13,
    Group_Sem_One_G14,
    Group_Sem_One_G15
}
console.log(ThreeD_Main);


//Information Security
const Group_Sem_One_G16=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="9")||
        (student.op1_id==="9" && student.op2_id==="11")
})
const Group_Sem_One_G17=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="7")||
        (student.op1_id==="7" && student.op2_id==="11")
})
const Group_Sem_One_G18=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="13")||
        (student.op1_id==="13" && student.op2_id==="11")
})

// console.log("IST and  Game:"+Group_Sem_One_G16);
// console.log("IST and  Rbtics:"+Group_Sem_One_G17);
// console.log("IST and  Sens:"+Group_Sem_One_G18);

console.log("--------IST MAin------")
const IST_Main={
    Group_Sem_One_G16,
    Group_Sem_One_G17,
    Group_Sem_One_G18
}
console.log(IST_Main);

//Game Engine

const Group_Sem_One_G19=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="9" && student.op2_id==="7")||
        (student.op1_id==="7" && student.op2_id==="9")
})
const Group_Sem_One_G20=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="9" && student.op2_id==="13")||
        (student.op1_id==="13" && student.op2_id==="9")
})
// console.log("Game and Rbtics :"+Group_Sem_One_G19);
// console.log("Game and Sens :"+Group_Sem_One_G20);
console.log("--------Game MAin------")
const GAme_Main={
    Group_Sem_One_G19,
    Group_Sem_One_G20,
}
console.log(GAme_Main);

//Rootic

const Group_Sem_One_G21=studentsAllmodulesInFirstSemester.filter(student =>{
    return(student.op1_id==="7" && student.op2_id==="13")||
        (student.op1_id==="13" && student.op2_id==="7")
})
// console.log("Rbtic and Sens :"+Group_Sem_One_G21);

console.log("-------Robotics---------")
const Robotics_Main={
    Group_Sem_One_G21
}
console.log(Robotics_Main);


//----------2 semester all module Students


//Mobile
const Group_Sem_Two_G1=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="6" && student.op2_id==="3")||
        (student.op1_id==="3" && student.op2_id==="6")
})
const Group_Sem_Two_G2=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="6" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="6")
})
const Group_Sem_Two_G3=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="6" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="6")
})
const Group_Sem_Two_G4=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="6" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="6")
})
const Group_Sem_Two_G5=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="6" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="6")
})

console.log("------Mobile---------");

// console.log("Mobie and Server :"+Group_Sem_Two_G1);
// console.log("Mobie and XR :"+Group_Sem_Two_G2);
// console.log("Mobie and Algo :"+Group_Sem_Two_G3);
// console.log("Mobie and Machine :"+Group_Sem_Two_G4);
// console.log("Mobie and Maths :"+Group_Sem_Two_G5);

const Mobile_Main={
    Group_Sem_Two_G1,
    Group_Sem_Two_G2,
    Group_Sem_Two_G3,
    Group_Sem_Two_G4,
    Group_Sem_Two_G5
}
console.log(Mobile_Main);


//Serverside
const Group_Sem_Two_G6=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="3" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="3")
})
const Group_Sem_Two_G7=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="3" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="3")
})
const Group_Sem_Two_G8=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="3" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="3")
})
const Group_Sem_Two_G9=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="3" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="3")
})

console.log("-----Server------");
// console.log("Server and XR :"+Group_Sem_Two_G6);
// console.log("Server and Algo :"+Group_Sem_Two_G7);
// console.log("Server and Machine :"+Group_Sem_Two_G8);
// console.log("Server and Maths and physics :"+Group_Sem_Two_G9);

const Server_Main={
    Group_Sem_Two_G6,
    Group_Sem_Two_G7,
    Group_Sem_Two_G8,
    Group_Sem_Two_G9,

}
console.log(Server_Main);


//XR
const Group_Sem_Two_G10=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="10" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="10")
})
const Group_Sem_Two_G11=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="10" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="10")
})
const Group_Sem_Two_G12=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="10" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="10")
})

console.log("--------XR----------");
// console.log("XR and Algo :"+Group_Sem_Two_G10);
// console.log("XR and Machine :"+Group_Sem_Two_G11);
// console.log("XR and Maths and Physics :"+Group_Sem_Two_G12);

const XR_Main={
    Group_Sem_Two_G10,
    Group_Sem_Two_G11,
    Group_Sem_Two_G12

}

console.log(XR_Main);

//Algo
const Group_Sem_Two_G13=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="1" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="1")
})
const Group_Sem_Two_G14=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="1" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="1")
})
console.log("-----Algorithams--------");
// console.log("Algo and Machine :"+Group_Sem_Two_G13);
// console.log("Algo and Maths and physics:"+Group_Sem_Two_G14);

const Algo_Main={
    Group_Sem_Two_G13,
    Group_Sem_Two_G14
}

console.log(Algo_Main);


//ML
const Group_Sem_Two_G15=studentsAllmodulesInSecondSemester.filter(student =>{
    return(student.op1_id==="2" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="2")
})
console.log("-------Machine Learning--------");
// console.log("Machine and Maths and Physics :"+Group_Sem_Two_G15);

const ML_main={
    Group_Sem_Two_G15
}
console.log(ML_main);




// ----------1sem and 2sem All Students Filter

//ACD
const Group_Sem_One_And_One_ACD_G1=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="4" && student.op2_id==="6")||
        (student.op1_id==="6" && student.op2_id==="4")
})
const Group_Sem_One_And_One_ACD_G2=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="4" && student.op2_id==="3")||
        (student.op1_id==="3" && student.op2_id==="4")
})
const Group_Sem_One_And_One_ACD_G3=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="4" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="4")
})
const Group_Sem_One_And_One_ACD_G4=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="4" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="4")
})
const Group_Sem_One_And_One_ACD_G5=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="4" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="4")
})
const Group_Sem_One_And_One_ACD_G6=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="4" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="4")
})
console.log("---------ACD with Others---------");
// console.log("ACD and Mobie :"+Group_Sem_One_And_One_ACD_G1);
// console.log("ACD and Server :"+Group_Sem_One_And_One_ACD_G2);
// console.log("ACD and XR :"+Group_Sem_One_And_One_ACD_G3);
// console.log("ACD and Algo :"+Group_Sem_One_And_One_ACD_G4);
// console.log("ACD and Machine :"+Group_Sem_One_And_One_ACD_G5);
// console.log("ACD and Maths and Physics :"+Group_Sem_One_And_One_ACD_G6);

const ASC_With_Others={
    Group_Sem_One_And_One_ACD_G1,
    Group_Sem_One_And_One_ACD_G2,
    Group_Sem_One_And_One_ACD_G3,
    Group_Sem_One_And_One_ACD_G4,
    Group_Sem_One_And_One_ACD_G5,
    Group_Sem_One_And_One_ACD_G6
}
console.log(ASC_With_Others)

//HCI
const Group_Sem_One_And_One_HCI_G1=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="6")||
        (student.op1_id==="6" && student.op2_id==="5")
})
const Group_Sem_One_And_One_HCI_G2=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="3")||
        (student.op1_id==="3" && student.op2_id==="5")
})
const Group_Sem_One_And_One_HCI_G3=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="5")
})
const Group_Sem_One_And_One_HCI_G4=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="5")
})
const Group_Sem_One_And_One_HCI_G5=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="5")
})
const Group_Sem_One_And_One_HCI_G6=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="5" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="5")
})
console.log("-----------------HCI with Others-----------------");
// console.log("HCI and Mobie :"+Group_Sem_One_And_One_HCI_G1);
// console.log("HCI and Server :"+Group_Sem_One_And_One_HCI_G2);
// console.log("HCI and XR :"+Group_Sem_One_And_One_HCI_G3);
// console.log("HCI and Algo :"+Group_Sem_One_And_One_HCI_G4);
// console.log("HCI and Machine :"+Group_Sem_One_And_One_HCI_G5);
// console.log("HCI and Maths and Physics :"+Group_Sem_One_And_One_HCI_G6);

const HCI_With_Others={
    Group_Sem_One_And_One_HCI_G1,
    Group_Sem_One_And_One_HCI_G2,
    Group_Sem_One_And_One_HCI_G3,
    Group_Sem_One_And_One_HCI_G4,
    Group_Sem_One_And_One_HCI_G5,
    Group_Sem_One_And_One_HCI_G6

}
console.log(HCI_With_Others);

//3D
const Group_Sem_One_And_One_3D_G1=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="6")||
        (student.op1_id==="6" && student.op2_id==="8")
})
const Group_Sem_One_And_One_3D_G2=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="3")||
        (student.op1_id==="3" && student.op2_id==="8")
})
const Group_Sem_One_And_One_3D_G3=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="8")
})
const Group_Sem_One_And_One_3D_G4=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="8")
})
const Group_Sem_One_And_One_3D_G5=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="8")
})
const Group_Sem_One_And_One_3D_G6=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="8" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="8")
})
console.log("----------3D-----------");
// console.log("3D and Mobie :"+Group_Sem_One_And_One_3D_G1);
// console.log("3D and Server :"+Group_Sem_One_And_One_3D_G2);
// console.log("3D and XR :"+Group_Sem_One_And_One_3D_G3);
// console.log("3D and Algo :"+Group_Sem_One_And_One_3D_G4);
// console.log("3D and Machine :"+Group_Sem_One_And_One_3D_G5);
// console.log("3D and Maths and Physics :"+Group_Sem_One_And_One_3D_G6);

const ThreeD_Main_With_Others={
    Group_Sem_One_And_One_3D_G1,
    Group_Sem_One_And_One_3D_G2,
    Group_Sem_One_And_One_3D_G3,
    Group_Sem_One_And_One_3D_G4,
    Group_Sem_One_And_One_3D_G5,
    Group_Sem_One_And_One_3D_G6

}
console.log(ThreeD_Main_With_Others)

//ITS
const Group_Sem_One_And_One_ITS_G1=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="6")||
        (student.op1_id==="6" && student.op2_id==="11")
})
const Group_Sem_One_And_One_ITS_G2=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="3")||
        (student.op1_id==="3" && student.op2_id==="11")
})
const Group_Sem_One_And_One_ITS_G3=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="11")
})
const Group_Sem_One_And_One_ITS_G4=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="11")
})
const Group_Sem_One_And_One_ITS_G5=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="11")
})
const Group_Sem_One_And_One_ITS_G6=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="11" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="11")
})
console.log("------ITS with Other Modules---------");
// console.log("ITS and Mobie :"+Group_Sem_One_And_One_ITS_G1);
// console.log("ITS and Server :"+Group_Sem_One_And_One_ITS_G2);
// console.log("ITS and XR :"+Group_Sem_One_And_One_ITS_G3);
// console.log("ITS and Algo :"+Group_Sem_One_And_One_ITS_G4);
// console.log("ITS and Machine :"+Group_Sem_One_And_One_ITS_G5);
// console.log("ITS and Maths and Physics :"+Group_Sem_One_And_One_ITS_G6);

const ITS_With_Other={
    Group_Sem_One_And_One_ITS_G1,
    Group_Sem_One_And_One_ITS_G2,
    Group_Sem_One_And_One_ITS_G3,
    Group_Sem_One_And_One_ITS_G4,
    Group_Sem_One_And_One_ITS_G5,
    Group_Sem_One_And_One_ITS_G6


}
console.log(ITS_With_Other)
//Game Engine A
const Group_Sem_One_And_One_GEA_G1=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="9" && student.op2_id==="6")||
        (student.op1_id==="6" && student.op2_id==="9")
})
const Group_Sem_One_And_One_GEA_G2=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="9" && student.op2_id==="3")||
        (student.op1_id==="3" && student.op2_id==="9")
})
const Group_Sem_One_And_One_GEA_G3=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="9" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="9")
})
const Group_Sem_One_And_One_GEA_G4=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="9" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="9")
})
const Group_Sem_One_And_One_GEA_G5=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="9" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="9")
})
const Group_Sem_One_And_One_GEA_G6=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="9" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="9")
})
console.log("------Game with Other Module--------");
// console.log("Game and Mobie :"+Group_Sem_One_And_One_GEA_G1);
// console.log("Game and Server :"+Group_Sem_One_And_One_GEA_G2);
// console.log("Game and XR :"+Group_Sem_One_And_One_GEA_G3);
// console.log("Game and Algo :"+Group_Sem_One_And_One_GEA_G4);
// console.log("Game and Machine :"+Group_Sem_One_And_One_GEA_G5);
// console.log("Game and Maths and Physics :"+Group_Sem_One_And_One_GEA_G6);

const GameXi={
    Group_Sem_One_And_One_GEA_G1,
    Group_Sem_One_And_One_GEA_G2,
    Group_Sem_One_And_One_GEA_G3,
    Group_Sem_One_And_One_GEA_G4,
    Group_Sem_One_And_One_GEA_G5,
    Group_Sem_One_And_One_GEA_G6
}
console.log(GameXi);

//Robotics Pri
const Group_Sem_One_And_One_RP_G1=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="7" && student.op2_id==="6")||
        (student.op1_id==="6" && student.op2_id==="7")
})
const Group_Sem_One_And_One_RP_G2=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="7" && student.op2_id==="3")||
        (student.op1_id==="3" && student.op2_id==="7")
})
const Group_Sem_One_And_One_RP_G3=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="7" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="7")
})
const Group_Sem_One_And_One_RP_G4=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="7" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="7")
})
const Group_Sem_One_And_One_RP_G5=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="7" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="7")
})
const Group_Sem_One_And_One_RP_G6=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="7" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="7")
})
console.log("---------RObotics with Other------------");
// console.log("Robotics and Mobie :"+Group_Sem_One_And_One_RP_G1);
// console.log("Robotics and Server :"+Group_Sem_One_And_One_RP_G2);
// console.log("Robotics and XR :"+Group_Sem_One_And_One_RP_G3);
// console.log("Robotics and Algo :"+Group_Sem_One_And_One_RP_G4);
// console.log("Robotics and Machine :"+Group_Sem_One_And_One_RP_G5);
// console.log("Robotics and Maths and Physics :"+Group_Sem_One_And_One_RP_G6);

const Robotics_With={
    Group_Sem_One_And_One_RP_G1,
    Group_Sem_One_And_One_RP_G2,
    Group_Sem_One_And_One_RP_G3,
    Group_Sem_One_And_One_RP_G4,
    Group_Sem_One_And_One_RP_G5,
    Group_Sem_One_And_One_RP_G6
}
console.log(Robotics_With)

//Sens
const Group_Sem_One_And_One_SI_G1=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="13" && student.op2_id==="6")||
        (student.op1_id==="6" && student.op2_id==="13")
})
const Group_Sem_One_And_One_SI_G2=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="13" && student.op2_id==="3")||
        (student.op1_id==="3" && student.op2_id==="13")
})
const Group_Sem_One_And_One_SI_G3=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="13" && student.op2_id==="10")||
        (student.op1_id==="10" && student.op2_id==="13")
})
const Group_Sem_One_And_One_SI_G4=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="13" && student.op2_id==="1")||
        (student.op1_id==="1" && student.op2_id==="13")
})
const Group_Sem_One_And_One_SI_G5=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="13" && student.op2_id==="2")||
        (student.op1_id==="2" && student.op2_id==="13")
})
const Group_Sem_One_And_One_SI_G6=FirstSem_andSecondSem.filter(student =>{
    return(student.op1_id==="13" && student.op2_id==="12")||
        (student.op1_id==="12" && student.op2_id==="13")
})
console.log("-----------------Sens with Other Modules-----------------");
// console.log("Sens and Mobie :"+Group_Sem_One_And_One_SI_G1);
// console.log("Sens and Server :"+Group_Sem_One_And_One_SI_G2);
// console.log("Sens and XR :"+Group_Sem_One_And_One_SI_G3);
// console.log("Sens and Algo :"+Group_Sem_One_And_One_SI_G4);
// console.log("Sens and Machine :"+Group_Sem_One_And_One_SI_G5);
// console.log("Sens and Maths and Physics :"+Group_Sem_One_And_One_SI_G6);

//

//this is the 
const Sens_With_Others={
    Group_Sem_One_And_One_SI_G1,
    Group_Sem_One_And_One_SI_G2,
    Group_Sem_One_And_One_SI_G3,
    Group_Sem_One_And_One_SI_G4,
    Group_Sem_One_And_One_SI_G5,
    Group_Sem_One_And_One_SI_G6


}
console.log(Sens_With_Others)

// console.log(Group_Sem_One_G1,Group_Sem_One_G2,Group_Sem_One_G3,Group_Sem_One_G4,Group_Sem_One_G5)

//Grouping
const groupedStudentsBySemester ={
    studentsAllmodulesInFirstSemester,
    studentsAllmodulesInSecondSemester,
    FirstSem_andSecondSem,
    
}

//Number of Studemnts
 const   First_Semester_All_Do_Student_Count = studentsAllmodulesInFirstSemester.length;
 const    Second_Semester_All_Do_Student_Count =studentsAllmodulesInSecondSemester.length;
 const    First_And_Second_Semester_All_Do_Student_Count=FirstSem_andSecondSem.length;

//number print
console.log("Number Of 1st Semester Students :",First_Semester_All_Do_Student_Count,
    "\n Number of 2nd Semester Students :",Second_Semester_All_Do_Student_Count,
    "\n Number of Student 1sem and 2sem Modules :",First_And_Second_Semester_All_Do_Student_Count)
//array print
console.log(groupedStudentsBySemester)



//The Count of Student in Modules

//All student si 1sem
console.log("");
console.log("-----------------All student  1sem count-----------------");

//ACD Count in All 1semester
const ACD_Student_Count = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "4" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "4")
}).length;
console.log("ACD Student Count all 1 semester:"+ACD_Student_Count);

//HCI Count
const HCI_Student_Count = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "5" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "5")
}).length;
console.log("HCI Student all 1 semester:"+HCI_Student_Count)

//3D Count
const ThreeD_Student_Count = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "8" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "8")
}).length;
console.log("3D Interactive Student all 1 semester :"+ThreeD_Student_Count)

//ITS Count
const ITS_Student_Count = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "11" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "11")
}).length;
console.log("Information Security Student all 1 semester :"+ITS_Student_Count)

//Game Engine Count
const Game_Student_Count = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "9" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "9")
}).length;
console.log("Game Engine Student all 1 semester:"+Game_Student_Count)

//Robotics Count
const Robotics_Student_Count = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "7" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "7")
}).length;
console.log("Robotics Student all 1 semester:"+Robotics_Student_Count)

//Sens Count
const Sens_Student_Count = studentsAllmodulesInFirstSemester.filter(student => {
    return (student.op1_id === "13" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "13")
}).length;
console.log("Sens Student all 1 semester:"+Sens_Student_Count)
console.log("-----------Count-----------------");
console.log("First  sem all student count :"+First_Semester_All_Do_Student_Count);







//All student si 2sem
console.log("");
console.log("-----------------All student  2sem count-----------------");

//mobile
const Mobile_Student_Count = studentsAllmodulesInSecondSemester.filter(student => {
    return (student.op1_id === "6" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "6")
}).length;
console.log("Mobile Student all 2 semester:"+Mobile_Student_Count)

//Server
const Server_Student_Count = studentsAllmodulesInSecondSemester.filter(student => {
    return (student.op1_id === "3" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "3")
}).length;
console.log("Server Student all 2 semester:"+Server_Student_Count)

//XR
const XR_Student_Count = studentsAllmodulesInSecondSemester.filter(student => {
    return (student.op1_id === "10" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "10")
}).length;
console.log("XR Student all 2 semester:"+XR_Student_Count)

//Algo
const Algo_Student_Count = studentsAllmodulesInSecondSemester.filter(student => {
    return (student.op1_id === "1" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "1")
}).length;
console.log("Algo Student all 2 semester:"+Algo_Student_Count)

//ML
const ML_Student_Count = studentsAllmodulesInSecondSemester.filter(student => {
    return (student.op1_id === "2" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "2")
}).length;
console.log("ML Student all 2 semester:"+ML_Student_Count)


console.log("-----------Count-----------------");
console.log("Second sem all student count :"+Second_Semester_All_Do_Student_Count);






//1sem and 2sem all modules students

console.log("");
console.log("-----------------1sem and 2sem all modules students count-----------------");

//acd main
const ACD_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "4" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "4")
}).length;
console.log("ACD Student all 1 semester and 2 semester:"+ACD_Main_Count);

//hci main
const HCI_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "5" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "5")
}).length;
console.log("HCI Student all 1 semester and 2 semester:"+HCI_Main_Count)

//3d main
const ThreeD_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "8" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "8")
}).length;
console.log("3D Interactive Student all 1 semester and 2 semester :"+ThreeD_Main_Count)

//its main
const ITS_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "11" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "11")
}).length;
console.log("Information Security Student all 1 semester and 2 semester :"+ITS_Main_Count)

//game main
const Game_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "9" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "9")
}).length;
console.log("Game Student Count in 1 semester and 2 semester  :"+Game_Student_Count)

//robotics main
const Robotics_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "7" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "7")
}).length;
console.log("Robotics Student Count in 1 semester and 2 semester :"+Robotics_Student_Count)

//sens main
const Sens_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "13" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "13")
}).length;
console.log("Sens Student Count in 1 semester and 2 semester :"+Sens_Student_Count)

//mobile main
const Mobile_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "6" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "6")
}).length;
console.log("Mobile Student Count in 1 semester and 2 semester:"+Mobile_Student_Count)

//server main
const Server_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "3" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "3")
}).length;
console.log("Server Student Count in 1 semester and 2 semester :"+Server_Student_Count)

//xr main
const XR_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "10" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "10")
}).length;
console.log("XR Student Count in 1 semester and 2 semester :"+XR_Student_Count)

//algo main
const Algo_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "1" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "1")
}).length;
console.log("Algo Student Count in 1 semester and 2 semester:"+Algo_Student_Count)

//ml main
const ML_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "2" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "2")
}).length;
console.log("ML Student Count in 1 semester and 2 semester :"+ML_Student_Count)

//all Game
const All_Modules_Main_Count=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "12" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "12")
}).length;
console.log("Maths and Physics Student Count in 1 semester and 2 semester :"+All_Modules_Main_Count)

//all robotics
const All_Modules_Main_Count_Robotics=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "7" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "7")
}).length;
console.log("Robotics Student Count in 1 semester and 2 semester:"+All_Modules_Main_Count_Robotics)

//all Sens
const All_Modules_Main_Count_Sens=FirstSem_andSecondSem.filter(student => {
    return (student.op1_id === "13" || student.op2_id === null)||(student.op1_id === null || student.op2_id === "13")
}).length;
console.log("Sens Student Count in 1 semester and 2 semester :"+All_Modules_Main_Count_Sens)
//all student count is 1sem and 2sem 
console.log("-----------Count-----------------");
console.log("First sen abd second sem all student count :"+First_And_Second_Semester_All_Do_Student_Count);

//Divide grouping 

//Grouping for 1semester
//min =10 max=40

// Function to get semester information for a module by its ID
function getModuleSemester(moduleId) {
    const module = Optional_modules.find(module => module.module_id === moduleId);
    return module ? module.semester : null;
}

// Function to create groups based on specified conditions
function createGroups(students) {
    const groups = [];
    const sem1Students = [];
    const sem2Students = [];

    // Separate students into semester 1 and semester 2 groups
    students.forEach(student => {
        const semester1 = getModuleSemester((student.op1_id || student.op2_id) || (student.op2_id || student.op1_id));
        const semester2 = getModuleSemester((student.op2_id || student.op1_id)||(student.op1_id || student.op2_id));
        if (semester1 === "1 semester") {
            sem1Students.push(student);
        }
        if (semester2 === "2 semester") {
            sem2Students.push(student);
        }
    });

    // Shuffle sem1Students and sem2Students arrays
    shuffleArray(sem1Students);
    shuffleArray(sem2Students);

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Determine the maximum number of groups
    const maxGroups = Math.min(Math.ceil(students.length / 10), 16);

    // Create groups for semester 1 students
    for (let i = 0; i < maxGroups; i++) {
        const group = sem1Students.splice(0, Math.min(40, Math.max(10, Math.floor(students.length / maxGroups))));
        groups.push(group);
    }

    // Distribute remaining semester 2 students to existing groups
    let i = 0;
    while (sem2Students.length > 0) {
        if (i >= groups.length) {
            i = 0;
        }
        const group = groups[i];
        const studentCount = group.reduce((total, student) => total + 1, 0);
        if (studentCount < 42 && sem2Students.length > 0) {
            group.push(sem2Students.shift());
        }
        i++;
    }

    return groups;
}

// Function to display groups along with students
function displayGroups(groups) {
    groups.forEach((group, index) => {
        console.log(`Group ${index + 1}:`);
        group.forEach(student => {
            console.log(`- Student ID: ${student.id}, Optional Module 1: ${Optional_modules.find(module => module.module_id === student.op1_id).module_name} , "    "Optional Module 2: ${Optional_modules.find(module => module.module_id === student.op2_id).module_name}`);
        });
        console.log();
    });
}

// Call the function with your array of student data
const groups = createGroups(students);

// Display groups
displayGroups(groups);



