import friendlyTime from '../../../../../../helpers/friendlyTime';
import YellowBtn from '../../../../../buttons/YellowBtn';

export function CardHead({ el }: { el: any }) {
  return (
    <section >
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <div className="flex items-center gap-2">
            <img
              className="w-[25px] h-[25px] rounded-[50%]"
              src={el.userImg}
              alt="user"
            />

            <div className="text-sm font-semibold">{el.username}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-accentGray-700">•</div>
            <div className="text-xs text-accentGray-700">
              Posted by {el.author}
            </div>
            <div className="text-xs text-accentGray-700">•</div>
            <div className="text-xs text-accentGray-700">
              {friendlyTime(el.time)}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <YellowBtn short label="Join" />
          <img
            className="cursor-pointer"
            src="/assets/vectors/common/menu-vertical.svg"
            alt="menu"
          />
        </div>
      </div>
      <hr />
    </section>
  );
}
