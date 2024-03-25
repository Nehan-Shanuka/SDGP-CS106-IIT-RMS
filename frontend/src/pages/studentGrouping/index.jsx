/* eslint-disable no-unused-vars */
import { Button, Card } from "@mui/material";
import axios from "axios";

export default function StdGrouping() {
  const createGroup = async () => {
    try {
      const response = await axios.post(
        "https://sdgp-cs106-iit-rms.onrender.com/groups"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex gap-0 bg-gray-200">
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 3,
            maxHeight: "100vh",
          }}
        >
          <div>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: 1,
                width: "100%",
                backgroundColor: "#D9D9D9",
                color: "#000",

                ":hover": {
                  backgroundColor: "#3E737A",
                  color: "#fff",
                },
              }}
              onClick={createGroup}
            >
              Search
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}
