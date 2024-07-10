const teacherItemApiUrl = "https://school-server-phi.vercel.app/teachers";

export async function teacherApi() {
  const res = await fetch(teacherItemApiUrl, {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
}
