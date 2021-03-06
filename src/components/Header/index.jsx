/* eslint-disable jsx-a11y/anchor-is-valid */
import Search from '../Search/index'
import { Link } from 'react-router-dom';
import React from 'react';

export default React.memo(function Header() {
  return (
    <>
      <header className="my-8 flex text-white ">
        <div className="flex text-white ml-10 mx-3">
          <Link to="/">
          <span className="uppercase font-bold text-3xl tracking-space2">
            Rawg
          </span>
          </Link>
        </div>
        <div className="rounded bg-white text-black capitalize flex justify-center items-center pr-3 overflow-hidden text-sm mx-2">
          <a href="#" className="flex whitespace-nowrap">
            <img
              className="-bottom-2 relative"
              srcSet="data:image/png;base64,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 2x, data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAADAFBMVEVHcExTn6RYPD+FLzKnrKyIKiyHKiphoqqjyNFCgoamvMGrwchjgoeSp6mst73BICJVrrdAmaFEgIhdzdVRvcZVtLyNxM8+nqeSvsZVqqpnyNGGxMteuMKgIyVgx9FOsrt2vsaduL7c6OiJlp11NjieICI+fImBqrCZzdd5xMyOzthtsrlEjpVXlJmqxsY8gomqwMVSl55HmqJJhIqgra2BvMGRur95wMd7s7jh4eGLLC+AOzuNMjWWP0GXQkKmIiWZKyv8/PzMR0efJiibYmWxICGqJSm3Jyf///+8IyX////aeHmuJie8ICS8ICPlq6vFLTDckZLRZWb///+6EBO9Fhm1GBmwDxFCsLi6AQM7m6S2AgNCrLXCFxr2///6//+JEBLDJCf46urBDRDi5+Hy19cic3o+pK1Nlp46lZ1r7vY3ipFm5Ow7oKiKFhmVFhi3xcTGWFntwMDI1NHEEBPYlpb79/fRXV/ZyMTbhYW3HiDJQUP6+fj38vOyAwa+EBNGtr84p7BFsrw2g4ougohY3uhNg4pZxM1n+v5ezdZEwMlR2OJjvcWvGhxn3edZgodKy9Xv9PGaW1z029vz/frnoqOrCQy2SU3GcnJe2ODPcnbp+fKuCAvy+vfVsK22CA+iDxPBHR/OR0mwMjTabG58ERTUVFeoFQ+bFhrp0dLBQky5igWoGBu8Uknt+fvvx8jSZGi9IiTgpaQ5jJSPwsg2naVvpqwuiZFUu8NGpq5U7PRFi5JG0dtel59PkJht8/k+s7xL3udrwsty+P+QMzW6n5/jm5y1uLfi7+uXT1Ds7uqtqqnZo6DXfX7t//ukTU+kjIyUJCazLS5BeoWsKhDCbGq0MzWffX0zpLbASxPdjY5yhY9a1OO6d3uxkpF8lHJDusvfuLbHLzKELzDLVFX4++LBPyNPgW/LrgDPs7DamW25wSzi26i8r6rJy8XXk0DuuQDcw2fsurucQEC2VwLIkwD03d3inp/yw0PFOjzSbm99p4fvycn9+s7u4uDx5+Ud53bzAAAAU3RSTlMAMiiwEtIMSx02w2oYbanV7NAeyvi6efV+Bqj2NvHt/tRTFid6/CnLZui16v6KCf3Jy/DtO8uQ3uYRuEqLfjbkHr0ZePzOS4tluMjziO3ivWXzyJ1205gAAAImSURBVCjPY2DAAtiFpSQZcAFGkYYGGQYODuyyok0RMeyK0hLYtcpHxDSqb1FgwSqr2xSTvnWbpjJ2gw1j0qO263CD2fz8nu5ubEiSPEa5mS1padpaGkBnlZQkl8T6+ThA5UzMzNs7M9Nadu6IipATY1i2ZMmyR/X1vs5A/Sy8podysg63N+/OyMiOym0UYAgGgrJP5aGhrna8Fj05Wfs7urP7jfWbN0eJC7IzBKcWrU8KDl5fHenS09mX1dF68MBebh41Tk5OIaBFi2KT6xdu+BNcs+H2zL6c1l170jP4EE5MTo5NjI0O+VX79/edmd0TuiL2cekhZGMrU5O+ff9Zt+rH6wdAucw2LuQwmgp0VG1wzaywDy+e38jNbjNQQg6Z4OBjiYlPVsa9/7p69f3L/XyWKOEWPDk0JHT+s49v1i5/9fTuYlvUUA0uCgkNvfll7bqXC6avexhuz4Yqm7QwJOTKijUVKYuB+FqvNYpsUXBl9PyQsBVviz8n3Cs+v8AGRba6LPhsSPS0qynvHi+9XjApwQpFNrK8Jjj1zLyU2fPyl14AyrKiykYumhwcd252xaXlF08XnEST9Y6MDC0vLZ1RFT5tRvHxI3mosl5TE6Oj6+rmhM8pPHXiaF4eM4qsR3DSreqNVRtXlU6cO3F6fr4KanA4BgfH/0/9NzduypRZ4b2qTKiyTv618UAQF7eyMDwsjBkjiQYEBW7aVFlYBZSURdUKAD8b1labCuRNAAAAAElFTkSuQmCC 1x"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAADAFBMVEVHcExTn6RYPD+FLzKnrKyIKiyHKiphoqqjyNFCgoamvMGrwchjgoeSp6mst73BICJVrrdAmaFEgIhdzdVRvcZVtLyNxM8+nqeSvsZVqqpnyNGGxMteuMKgIyVgx9FOsrt2vsaduL7c6OiJlp11NjieICI+fImBqrCZzdd5xMyOzthtsrlEjpVXlJmqxsY8gomqwMVSl55HmqJJhIqgra2BvMGRur95wMd7s7jh4eGLLC+AOzuNMjWWP0GXQkKmIiWZKyv8/PzMR0efJiibYmWxICGqJSm3Jyf///+8IyX////aeHmuJie8ICS8ICPlq6vFLTDckZLRZWb///+6EBO9Fhm1GBmwDxFCsLi6AQM7m6S2AgNCrLXCFxr2///6//+JEBLDJCf46urBDRDi5+Hy19cic3o+pK1Nlp46lZ1r7vY3ipFm5Ow7oKiKFhmVFhi3xcTGWFntwMDI1NHEEBPYlpb79/fRXV/ZyMTbhYW3HiDJQUP6+fj38vOyAwa+EBNGtr84p7BFsrw2g4ougohY3uhNg4pZxM1n+v5ezdZEwMlR2OJjvcWvGhxn3edZgodKy9Xv9PGaW1z029vz/frnoqOrCQy2SU3GcnJe2ODPcnbp+fKuCAvy+vfVsK22CA+iDxPBHR/OR0mwMjTabG58ERTUVFeoFQ+bFhrp0dLBQky5igWoGBu8Uknt+fvvx8jSZGi9IiTgpaQ5jJSPwsg2naVvpqwuiZFUu8NGpq5U7PRFi5JG0dtel59PkJht8/k+s7xL3udrwsty+P+QMzW6n5/jm5y1uLfi7+uXT1Ds7uqtqqnZo6DXfX7t//ukTU+kjIyUJCazLS5BeoWsKhDCbGq0MzWffX0zpLbASxPdjY5yhY9a1OO6d3uxkpF8lHJDusvfuLbHLzKELzDLVFX4++LBPyNPgW/LrgDPs7DamW25wSzi26i8r6rJy8XXk0DuuQDcw2fsurucQEC2VwLIkwD03d3inp/yw0PFOjzSbm99p4fvycn9+s7u4uDx5+Ud53bzAAAAU3RSTlMAMiiwEtIMSx02w2oYbanV7NAeyvi6efV+Bqj2NvHt/tRTFid6/CnLZui16v6KCf3Jy/DtO8uQ3uYRuEqLfjbkHr0ZePzOS4tluMjziO3ivWXzyJ1205gAAAImSURBVCjPY2DAAtiFpSQZcAFGkYYGGQYODuyyok0RMeyK0hLYtcpHxDSqb1FgwSqr2xSTvnWbpjJ2gw1j0qO263CD2fz8nu5ubEiSPEa5mS1padpaGkBnlZQkl8T6+ThA5UzMzNs7M9Nadu6IipATY1i2ZMmyR/X1vs5A/Sy8podysg63N+/OyMiOym0UYAgGgrJP5aGhrna8Fj05Wfs7urP7jfWbN0eJC7IzBKcWrU8KDl5fHenS09mX1dF68MBebh41Tk5OIaBFi2KT6xdu+BNcs+H2zL6c1l170jP4EE5MTo5NjI0O+VX79/edmd0TuiL2cekhZGMrU5O+ff9Zt+rH6wdAucw2LuQwmgp0VG1wzaywDy+e38jNbjNQQg6Z4OBjiYlPVsa9/7p69f3L/XyWKOEWPDk0JHT+s49v1i5/9fTuYlvUUA0uCgkNvfll7bqXC6avexhuz4Yqm7QwJOTKijUVKYuB+FqvNYpsUXBl9PyQsBVviz8n3Cs+v8AGRba6LPhsSPS0qynvHi+9XjApwQpFNrK8Jjj1zLyU2fPyl14AyrKiykYumhwcd252xaXlF08XnEST9Y6MDC0vLZ1RFT5tRvHxI3mosl5TE6Oj6+rmhM8pPHXiaF4eM4qsR3DSreqNVRtXlU6cO3F6fr4KanA4BgfH/0/9NzduypRZ4b2qTKiyTv618UAQF7eyMDwsjBkjiQYEBW7aVFlYBZSURdUKAD8b1labCuRNAAAAAElFTkSuQmCC"
              title="rate top games"
              alt="rate top games"
            ></img>
            rate top game
          </a>
        </div>
        <div className="flex w-3/4 justify-center items-cente">
          <Search width={"w-full"} />
        </div>
        <div className="flex">
          <a className="uppercase px-2 whitespace-nowrap self-center" href="#">
            Login
          </a>
          <a className="uppercase px-2 whitespace-nowrap self-center" href="#">
            sign up
          </a>
          <a className="uppercase px-2 whitespace-nowrap self-center" href="#">
            Api
          </a>
        </div>
      </header>
    </>
  );
})