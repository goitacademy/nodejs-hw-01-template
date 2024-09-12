export const getAllContacts = async () => {
    return [
        { id: "86cf69d4-8e8c-490f-bd0c-163ff0278a12",
    name: "Nick Kassulke",
    phone: "(247) 612-2678 x1129",
    email: "Devon31@yahoo.com",
    job: "Dynamic Marketing Director"
    },
    {
        id: "9e0fe2ce-68e9-4867-99d3-4480898c0980",
        name: "Ernestine Bashirian",
        phone: "(573) 969-6762 x9082",
        email: "Earnestine12@yahoo.com",
        job: "Regional Program Designer"
      },
    ];
};

console.log(await getAllContacts());
