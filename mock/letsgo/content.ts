
import contentJson from "./contentJson"

const creat  = {
  contentList() {
    return [
      {
        id: 1,
        title: "相逢",
        subTitle: "相逢于此，相识于此，所谓缘分，妙不可言。",
        time: "2014-10-01",
        content: contentJson.meian,
      },
      {
        id: 2,
        title: "一醉",
        subTitle: "酒最迷人的地方就是可以让你不顾后果，还记不住干了什么。",
        time: "2015-07-14",
        content: contentJson.qiting,
      },
      {
        id: 3,
        title: "寻画",
        subTitle: "在不起眼的古镇里，藏着一些不起眼的画！不起眼的人在此寻它。",
        time: "2014-10-01",
        content: contentJson.fengjing,
      },
      {
        id: 4,
        title: "大雨",
        subTitle: "那场雨下得比河里的锦鲤都大，大得像鱼能在空气里呼吸",
        time: "2014-10-01",
        content: contentJson.wuzhen,
      },
      {
        id: 5,
        title: "风筝和臭豆腐",
        subTitle: "在橘子洲头看风筝，在老街吃臭豆腐",
        time: "2014-10-01",
        content: contentJson.changsha,
      },
      {
        id: 6,
        title: "高山",
        subTitle: "悬崖峭壁，高山险峻，曾无人烟，今客如云～",
        time: "2014-10-01",
        content: contentJson.zhangjiajie,
      }
    ];
  }
}
export default creat
  // [
    // {
    //   url: "/api/letsgo/content",
    //   method: "post",
    //   response: ({ body }: { body: any }) => {
    //     const { id } = body;
    //     const content = createContent().find(item => item.id == id
    //     );
    //     if (!content) {
    //       return { code: 400, data: { message: "暂无数据" } };
    //     }
    //     return content;
    //   },
    // },
  // ];