import { Waiting } from "@interfaces/waiting";
import BoothCardLayout from "./boothCardLayout";

interface BoothCardDetailProps {
  waitingDetail: Waiting;
}

const BoothCardDetail = ({ waitingDetail }: BoothCardDetailProps) => {
  const to = `/booth/${waitingDetail.booth?.boothID}`;

  return (
    <>
      {waitingDetail ? (
        <BoothCardLayout
          type="waiting"
          boothImage={waitingDetail.booth?.thumbnail}
          boothTitle={
            <>
              <span>{waitingDetail.booth?.name}</span>
            </>
          }
          boothSummary={waitingDetail.booth?.description}
          boothLocationInfo={waitingDetail.booth?.location}
          header={waitingDetail.waitingNum}
          bottom={waitingDetail.personCount}
          to={to}
        />
      ) : (
        //TODO:- 엠티뷰 만들기
        <div>대기 정보가 없습니다.</div>
      )}
    </>
  );
};

export default BoothCardDetail;
