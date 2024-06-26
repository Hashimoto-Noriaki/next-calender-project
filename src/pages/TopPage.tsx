import { PrimaryBtn } from "../components/atoms/PrimaryBtn";
import { NotLoginLayout } from "../components/templates/NotLoginLayout";

export const TopPage = () => {
  return (
    <NotLoginLayout>
      <div className="text-center">
        <h1 className="text-7xl logo">スケジュール管理APP</h1>
        <p className="pt-[10vh] text-5xl">
          お互いのスケジュールを管理するアプリです
        </p>
        <div className="pt-[20vh]">
          <PrimaryBtn>ログイン</PrimaryBtn>
        </div>
      </div>
    </NotLoginLayout>
  );
}
export default TopPage;