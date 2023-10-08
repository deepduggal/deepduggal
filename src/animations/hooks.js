// TODO: Make some animations. Then add GSAP to the project if actually used.

/**
 * GSAP Animation Hook
 * @param {*} rootOrParentElement // Use the parent or root level element (for scoping). Idk which it should be. Need to read GSAP docs. 
 * @param {*} animationCb 
 * @param {*} dependencies // TODO: Should args to useAnimation or animationCb included in dependencies?
 * @returns 
 */
function useAnimation(rootOrParentElement, animationCb, dependencies = []) {

  useLayoutEffect(() => {
    // Create animation context.
    // This function is invoked immediately and all GSAP animations and ScrollTriggers
    // created during execution of this function get recorded
    // so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      animationCb();
    }, rootOrParentElement); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup

  }, dependencies); // <- empty dependency Array so it doesn't re-run on every render

  // Should it return animation status?
  // const [animation, setAnimation] = React.useState(false);
  // React.useEffect(() => {
  //   setAnimation(true);
  // }, []);
  return animation;
}