const port = 4000;

export default {
  USER_LOGIN: `https://server.cookingstates.cf:${port}/user/login`,
  USER_LOGOUT: `https://server.cookingstates.cf:${port}/user/logout`,
  USER_REGISTER: `https://server.cookingstates.cf:${port}/user/register`,
  USER_INFO: `https://server.cookingstates.cf:${port}/user/info`,
  EMAIL_CHECK: `https://server.cookingstates.cf:${port}/user/checkemail`,
  USER_UPDATE: `https://server.cookingstates.cf:${port}/user/update`,
  USER_UNREGISTER: `https://server.cookingstates.cf:${port}/user/unregister`,
  PERMISSION: `https://server.cookingstates.cf:${port}/user/permission`,
  ALL_USER: `https://server.cookingstates.cf:${port}/user/all`,

  COURSE_INFO: `https://server.cookingstates.cf:${port}/course`,
  COURSE_DETAIL: `https://server.cookingstates.cf:${port}/course`, // /:id
  ADD_COURSE: `https://server.cookingstates.cf:${port}/course`,
  COMPLETE_COURSE: `https://server.cookingstates.cf:${port}/course/complete`,

  RECIPE_INFO: `https://server.cookingstates.cf:${port}/recipe`,
  CUSTOM_RECIPE_INFO: `https://server.cookingstates.cf:${port}/recipe/custom/list`,
  CUSTOM_RECIPE_UPLOAD: `https://server.cookingstates.cf:${port}/recipe/upload`,
  RECIPE_DETAIL: `https://server.cookingstates.cf:${port}/recipe`, // /:id
  RECIPE_UPLOAD: `https://server.cookingstates.cf:${port}/recipe/upload`,
  RECIPE_CHECKED: `https://server.cookingstates.cf:${port}/recipe/:id/checked`,

  TOKEN_ACCESS: `https://server.cookingstates.cf:${port}/token/access`,
  TOKEN_REFRESH: `https://server.cookingstates.cf:${port}/token/refresh`,

  OAUTH_GOOGLE: `https://server.cookingstates.cf:${port}/oauth/google`,
  OAUTH_KAKAO: `https://server.cookingstates.cf:${port}/oauth/kakao`,
};
