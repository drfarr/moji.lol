import { isRight } from "fp-ts/lib/Either";
import { type ParsedUrlQuery } from "querystring";
import { type GetStaticProps, type GetStaticPaths } from "next";
import { getAllPaths, getTranslations } from "utils/localization";
import styles from "styles/Page.module.css";
import OpenGraph from "components/OpenGraph";
import Layout from "layouts";

import { useGetMojisQuery } from "@esrevinu/graphql/dist/generated";

interface Params extends ParsedUrlQuery {
  slug: string;
}

import { useMemo } from "react";
import { Badge, Button, Card, CardContent, Separator } from "@esrevinu/ui";

interface Props {}

interface GetStaticPropsResult extends Props {
  locale: string;
  translations: Record<string, string>;
}

const TranslatedPage = () => {
  const { data: _data, loading, error } = useGetMojisQuery();

  const data = useMemo(() => {
    return !loading && _data?.mojis ? _data.mojis : [];
  }, [_data, loading]);

  const tags = Array.from(
    new Set(
      data
        ?.map((moji) => {
          return moji?.tags.map((tag) => {
            return tag.title;
          });
        })
        .flat()
    )
  );

  return (
    <div>
      <OpenGraph />

      <section className="inline-flex flex-col">
        <div className="items-start pt-6">
          {tags?.map((tag, idx) => (
            <Button className="m-2" key={idx}>
              {tag}
            </Button>
          ))}
        </div>

        <div className="items-start justify-center gap-6 grid grid-cols-4">
          {!loading &&
            data.map(({ title, tags }, idx) => (
              <Card key={idx} className="inline-flex text-center h-56">
                <CardContent className="p-6 mx-auto">
                  <div className="p-6 mx-auto text-xl">{title}</div>
                  <Separator />
                  <div className="p-6 mx-auto">
                    {tags?.map((tag, idx) => (
                      <Badge key={idx}>{tag.title}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
};

TranslatedPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPaths(),
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<GetStaticPropsResult, Params> = async (
  context
) => {
  const { params } = context;
  if (params?.slug) {
    const { slug } = params;
    const translations = getTranslations(slug);
    if (isRight(translations)) {
      return {
        props: { locale: slug, translations: translations.right },
      };
    }
    throw new Error("Error: [locale].tsx translationData is left.");
  }
  throw new Error("Error: [locale].tsx params.slug is undefined.");
};

export { getStaticPaths, getStaticProps };
export default TranslatedPage;
