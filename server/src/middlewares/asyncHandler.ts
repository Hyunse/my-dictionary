/**
 * Async Await Handler
 * @param fn : function
 */
interface IParam {
  req?: Request,
  res?: Response,
  next?: Function
}
const asyncHandler = (fn) => (req, res, next): Promise<IParam> =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
