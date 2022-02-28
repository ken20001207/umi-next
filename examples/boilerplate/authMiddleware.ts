export default function (req: any, res: any, next: any) {
  console.log(req);
  console.log(res);
  next();
}
