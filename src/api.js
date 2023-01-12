export default class API {
  static async getSkills() {
    const response = await fetch(`${process.env.REACT_APP_SERVICE_URL}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }
  static async getSkillsById(id) {
    const response = await fetch(`${process.env.REACT_APP_SERVICE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }
}
