import axios from "axios";

const fetchColors = async () => {
  try {
    return await axios.get("http://localhost:5000/");
  } catch (e) {
    return [];
  }
};

jest.mock("axios");

describe("fetchColors", () => {
  describe("If the API call is succesfull", () => {
    it("Should return the list of colors", async () => {
      const colors = [
        {
          id: 1,
          color: "red",
          value: "#f00",
        },
        {
          id: 2,
          color: "green",
          value: "#0f0",
        },
        {
          id: 3,
          color: "blue",
          value: "#00f",
        },
        {
          id: 4,
          color: "cyan",
          value: "#0ff",
        },
        {
          id: 5,
          color: "magenta",
          value: "#f0f",
        },
        {
          id: 6,
          color: "yellow",
          value: "#ff0",
        },
        {
          id: 7,
          color: "black",
          value: "#000",
        },
      ];

      axios.get.mockResolvedValueOnce(colors);

      const result = await fetchColors();

      expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/");
      expect(result).toEqual(colors);
    });
  });

  describe("If API call fails", () => {
    it("Should return empty colors list", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await fetchColors();

      expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/");
      expect(result).toEqual([]);
    });
  });
});
