import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5709/164c/2a572434ea1d6d2b61cde168bae71544"
        }}
        style={styles.ImageBackground_524_103}
      />
      <View style={styles.View_524_104}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_524_105}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_524_109}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_524_113}
        />
      </View>
      <View style={styles.View_524_120}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
          }}
          style={styles.ImageBackground_524_121}
        />
      </View>
      <View style={styles.View_524_123}>
        <Text style={styles.Text_524_123}>Discover</Text>
      </View>
      <View style={styles.View_524_124}>
        <Text style={styles.Text_524_124}>Trending</Text>
      </View>
      <View style={styles.View_524_125}>
        <Text style={styles.Text_524_125}>Category</Text>
      </View>
      <View style={styles.View_524_126}>
        <Text style={styles.Text_524_126}>Events</Text>
      </View>
      <View style={styles.View_524_127}>
        <Text style={styles.Text_524_127}>Business</Text>
      </View>
      <View style={styles.View_524_128}>
        <Text style={styles.Text_524_128}>Places</Text>
      </View>
      <View style={styles.View_524_137}>
        <View style={styles.View_524_138}>
          <View style={styles.View_524_141}>
            <Text style={styles.Text_524_141}>Buhari</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_144}>
        <View style={styles.View_524_145}>
          <View style={styles.View_524_148}>
            <Text style={styles.Text_524_148}>Donald Trump</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_151}>
        <View style={styles.View_524_152}>
          <View style={styles.View_524_157}>
            <Text style={styles.Text_524_157}>Megan Markle</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_158}>
        <View style={styles.View_524_159}>
          <View style={styles.View_524_164}>
            <Text style={styles.Text_524_164}>P.M. Netanyahu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_165}>
        <View style={styles.View_524_166}>
          <View style={styles.View_524_171}>
            <Text style={styles.Text_524_171}>Chadwick Boseman</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_172}>
        <View style={styles.View_524_173}>
          <View style={styles.View_524_178}>
            <Text style={styles.Text_524_178}>Putin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_179}>
        <View style={styles.View_524_180}>
          <View style={styles.View_524_185}>
            <Text style={styles.Text_524_185}>Davido</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_186}>
        <View style={styles.View_524_187}>
          <View style={styles.View_524_192}>
            <Text style={styles.Text_524_192}>Bishop Kukah</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_193}>
        <View style={styles.View_524_194}>
          <View style={styles.View_524_199}>
            <Text style={styles.Text_524_199}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_200}>
        <View style={styles.View_524_201}>
          <View style={styles.View_524_206}>
            <Text style={styles.Text_524_206}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_207}>
        <View style={styles.View_524_208}>
          <View style={styles.View_524_213}>
            <Text style={styles.Text_524_213}>Guardiola</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_214}>
        <View style={styles.View_524_215}>
          <View style={styles.View_524_220}>
            <Text style={styles.Text_524_220}>Dbanj</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_221}>
        <View style={styles.View_524_222}>
          <View style={styles.View_524_227}>
            <Text style={styles.Text_524_227}>Soludo</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_228}>
        <View style={styles.View_524_229}>
          <View style={styles.View_524_234}>
            <Text style={styles.Text_524_234}>Tinubu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_235}>
        <View style={styles.View_524_236}>
          <View style={styles.View_524_241}>
            <Text style={styles.Text_524_241}>Umahi</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_242}>
        <View style={styles.View_524_243}>
          <View style={styles.View_524_248}>
            <Text style={styles.Text_524_248}>Elon Musk</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_524_249}>
        <View style={styles.View_524_250}>
          <View style={styles.View_524_251}>
            <Text style={styles.Text_524_251}>Breaking News</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_252}
          />
        </View>
        <View style={styles.View_524_253} />
        <View style={styles.View_524_254}>
          <View style={styles.View_524_255}>
            <Text style={styles.Text_524_255}>Global</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_256}
          />
        </View>
        <View style={styles.View_524_257} />
        <View style={styles.View_524_258}>
          <View style={styles.View_524_259}>
            <Text style={styles.Text_524_259}>Regional</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_260}
          />
        </View>
        <View style={styles.View_524_261} />
        <View style={styles.View_524_262}>
          <View style={styles.View_524_263}>
            <Text style={styles.Text_524_263}>Politics</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_264}
          />
        </View>
        <View style={styles.View_524_265} />
        <View style={styles.View_524_266}>
          <View style={styles.View_524_267}>
            <Text style={styles.Text_524_267}>Business</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_268}
          />
        </View>
        <View style={styles.View_524_269} />
        <View style={styles.View_524_270}>
          <View style={styles.View_524_271}>
            <Text style={styles.Text_524_271}>Entertainment</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_272}
          />
        </View>
        <View style={styles.View_524_273} />
        <View style={styles.View_524_274}>
          <View style={styles.View_524_275}>
            <Text style={styles.Text_524_275}>Sports</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_276}
          />
        </View>
        <View style={styles.View_524_277} />
        <View style={styles.View_524_278}>
          <View style={styles.View_524_279}>
            <Text style={styles.Text_524_279}>Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_280}
          />
        </View>
        <View style={styles.View_524_281} />
        <View style={styles.View_524_282}>
          <View style={styles.View_524_283}>
            <Text style={styles.Text_524_283}>Technology</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_284}
          />
        </View>
        <View style={styles.View_524_285} />
        <View style={styles.View_524_286}>
          <View style={styles.View_524_287}>
            <Text style={styles.Text_524_287}>Covid-19</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_524_288}
          />
        </View>
      </View>
      <View style={styles.View_524_289}>
        <View style={styles.View_524_290}>
          <View style={styles.View_524_291}>
            <View style={styles.View_524_294}>
              <Text style={styles.Text_524_294}>People</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_524_297}>
        <View style={styles.View_524_298}>
          <View style={styles.View_524_299}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/953f/c34e/975e290f1d9a5ba0c82b6ab29dc7a547"
              }}
              style={styles.ImageBackground_524_300}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d5/b4d8/5e408515a673c83256b9975c6f9b51a8"
              }}
              style={styles.ImageBackground_524_301}
            />
          </View>
          <View style={styles.View_524_303}>
            <View style={styles.View_524_304}>
              <View style={styles.View_524_305}>
                <Text style={styles.Text_524_305}>More</Text>
              </View>
              <View style={styles.View_524_306} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/313e/6db1/e7a33bada3d34c30f40758b1c634d1df"
                }}
                style={styles.ImageBackground_524_307}
              />
            </View>
            <View style={styles.View_524_309}>
              <View style={styles.View_524_310}>
                <View style={styles.View_524_311}>
                  <Text style={styles.Text_524_311}>Discover</Text>
                </View>
                <View style={styles.View_524_312} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4579/2702/86ccfb19a46211d6e5169004ea08ac70"
                  }}
                  style={styles.ImageBackground_524_313}
                />
              </View>
            </View>
            <View style={styles.View_524_316}>
              <View style={styles.View_524_317}>
                <Text style={styles.Text_524_317}>Live TV</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f680/efde/a23605101ed8ca95fd4d2701b4540253"
                }}
                style={styles.ImageBackground_524_318}
              />
            </View>
            <View style={styles.View_524_322}>
              <View style={styles.View_524_323}>
                <Text style={styles.Text_524_323}>News</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6286/1fe4/ebf1012254db1c10062744585139b3fb"
                }}
                style={styles.ImageBackground_524_324}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_524_329}>
          <View style={styles.View_524_330} />
        </View>
      </View>
      <View style={styles.View_535_37}>
        <View style={styles.View_524_331}>
          <View style={styles.View_I524_331_479_424}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c798/d2de/bd1bc9519d17de587f96617be9f42b17"
              }}
              style={styles.ImageBackground_I524_331_479_425}
            />
            <View style={styles.View_I524_331_479_428} />
            <View style={styles.View_I524_331_479_429} />
          </View>
          <View style={styles.View_I524_331_479_281}>
            <Text style={styles.Text_I524_331_479_281}>􀊱</Text>
          </View>
          <View style={styles.View_I524_331_479_282}>
            <Text style={styles.Text_I524_331_479_282}>􀆪</Text>
          </View>
          <View style={styles.View_I524_331_479_402}>
            <View style={styles.View_I524_331_479_403}>
              <View style={styles.View_I524_331_479_404}>
                <View style={styles.View_I524_331_479_405} />
                <View style={styles.View_I524_331_479_406}>
                  <Text style={styles.Text_I524_331_479_406}>return</Text>
                </View>
              </View>
              <View style={styles.View_I524_331_479_407}>
                <View style={styles.View_I524_331_479_408} />
                <View style={styles.View_I524_331_479_409}>
                  <Text style={styles.Text_I524_331_479_409}>space</Text>
                </View>
              </View>
              <View style={styles.View_I524_331_479_410}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cf0/6f3e/8ed7c865f4dc0713ab2b97248202d234"
                  }}
                  style={styles.ImageBackground_I524_331_479_411}
                />
                <View style={styles.View_I524_331_479_412}>
                  <View style={styles.View_I524_331_479_413}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5856/ee5f/9cfc1c6ea09be5962ec5ad46513005a9"
                      }}
                      style={styles.ImageBackground_I524_331_479_414}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcd6/cf7b/39b8573dae1f190b085d496ed44bbaa3"
                      }}
                      style={styles.ImageBackground_I524_331_479_417}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcd6/cf7b/39b8573dae1f190b085d496ed44bbaa3"
                      }}
                      style={styles.ImageBackground_I524_331_479_418}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e574/c514/369f256d09806b941612c7430f49d39e"
                      }}
                      style={styles.ImageBackground_I524_331_479_419}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da08/0e18/600d083dca0246c7a7efa3d49f6e61d1"
                    }}
                    style={styles.ImageBackground_I524_331_479_420}
                  />
                </View>
              </View>
              <View style={styles.View_I524_331_479_421}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6a3/2d68/5d8b7edf44bc04832bf0bd542fc29f54"
                  }}
                  style={styles.ImageBackground_I524_331_479_422}
                />
                <View style={styles.View_I524_331_479_423}>
                  <Text style={styles.Text_I524_331_479_423}>123</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I524_331_479_284}>
            <View style={styles.View_I524_331_479_285}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67e/99a5/7ad515f9d1d9e03add7b8e7b745ab8ca"
                }}
                style={styles.ImageBackground_I524_331_479_286}
              />
              <View style={styles.View_I524_331_479_287}>
                <View style={styles.View_I524_331_479_288}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d67/3efd/4a54a8f335c713e76d1d3346b78a46a9"
                    }}
                    style={styles.ImageBackground_I524_331_479_289}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f0/7c64/07cb2425a80a5b1ff9088e3d9ea74c99"
                  }}
                  style={styles.ImageBackground_I524_331_479_292}
                />
              </View>
            </View>
            <View style={styles.View_I524_331_479_295}>
              <View style={styles.View_I524_331_479_296} />
              <View style={styles.View_I524_331_479_297}>
                <Text style={styles.Text_I524_331_479_297}>M</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_298}>
              <View style={styles.View_I524_331_479_299} />
              <View style={styles.View_I524_331_479_300}>
                <Text style={styles.Text_I524_331_479_300}>N</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_301}>
              <View style={styles.View_I524_331_479_302} />
              <View style={styles.View_I524_331_479_303}>
                <Text style={styles.Text_I524_331_479_303}>B</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_304}>
              <View style={styles.View_I524_331_479_305} />
              <View style={styles.View_I524_331_479_306}>
                <Text style={styles.Text_I524_331_479_306}>V</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_307}>
              <View style={styles.View_I524_331_479_308} />
              <View style={styles.View_I524_331_479_309}>
                <Text style={styles.Text_I524_331_479_309}>C</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_310}>
              <View style={styles.View_I524_331_479_311} />
              <View style={styles.View_I524_331_479_312}>
                <Text style={styles.Text_I524_331_479_312}>X</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_313}>
              <View style={styles.View_I524_331_479_314} />
              <View style={styles.View_I524_331_479_315}>
                <Text style={styles.Text_I524_331_479_315}>Z</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_316}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9b3/708e/340beb2138437cb8300820e4aff242fc"
                }}
                style={styles.ImageBackground_I524_331_479_317}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dc0/8083/04dcbb27572b192455dc7c6e1599a3d1"
                }}
                style={styles.ImageBackground_I524_331_479_318}
              />
            </View>
          </View>
          <View style={styles.View_I524_331_479_319}>
            <View style={styles.View_I524_331_479_320}>
              <View style={styles.View_I524_331_479_321} />
              <View style={styles.View_I524_331_479_322}>
                <Text style={styles.Text_I524_331_479_322}>L</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_323}>
              <View style={styles.View_I524_331_479_324} />
              <View style={styles.View_I524_331_479_325}>
                <Text style={styles.Text_I524_331_479_325}>K</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_326}>
              <View style={styles.View_I524_331_479_327} />
              <View style={styles.View_I524_331_479_328}>
                <Text style={styles.Text_I524_331_479_328}>J</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_329}>
              <View style={styles.View_I524_331_479_330} />
              <View style={styles.View_I524_331_479_331}>
                <Text style={styles.Text_I524_331_479_331}>H</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_332}>
              <View style={styles.View_I524_331_479_333} />
              <View style={styles.View_I524_331_479_334}>
                <Text style={styles.Text_I524_331_479_334}>G</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_335}>
              <View style={styles.View_I524_331_479_336} />
              <View style={styles.View_I524_331_479_337}>
                <Text style={styles.Text_I524_331_479_337}>F</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_338}>
              <View style={styles.View_I524_331_479_339} />
              <View style={styles.View_I524_331_479_340}>
                <Text style={styles.Text_I524_331_479_340}>D</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_341}>
              <View style={styles.View_I524_331_479_342} />
              <View style={styles.View_I524_331_479_343}>
                <Text style={styles.Text_I524_331_479_343}>S</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_344}>
              <View style={styles.View_I524_331_479_345} />
              <View style={styles.View_I524_331_479_346}>
                <Text style={styles.Text_I524_331_479_346}>A</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I524_331_479_347}>
            <View style={styles.View_I524_331_479_348}>
              <View style={styles.View_I524_331_479_349} />
              <View style={styles.View_I524_331_479_350}>
                <Text style={styles.Text_I524_331_479_350}>P</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_351}>
              <View style={styles.View_I524_331_479_352} />
              <View style={styles.View_I524_331_479_353}>
                <Text style={styles.Text_I524_331_479_353}>O</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_354}>
              <View style={styles.View_I524_331_479_355} />
              <View style={styles.View_I524_331_479_356}>
                <Text style={styles.Text_I524_331_479_356}>I</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_357}>
              <View style={styles.View_I524_331_479_358} />
              <View style={styles.View_I524_331_479_359}>
                <Text style={styles.Text_I524_331_479_359}>U</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_360}>
              <View style={styles.View_I524_331_479_361} />
              <View style={styles.View_I524_331_479_362}>
                <Text style={styles.Text_I524_331_479_362}>Y</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_363}>
              <View style={styles.View_I524_331_479_364} />
              <View style={styles.View_I524_331_479_365}>
                <Text style={styles.Text_I524_331_479_365}>T</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_366}>
              <View style={styles.View_I524_331_479_367} />
              <View style={styles.View_I524_331_479_368}>
                <Text style={styles.Text_I524_331_479_368}>R</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_369}>
              <View style={styles.View_I524_331_479_370} />
              <View style={styles.View_I524_331_479_371}>
                <Text style={styles.Text_I524_331_479_371}>E</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_372}>
              <View style={styles.View_I524_331_479_373} />
              <View style={styles.View_I524_331_479_374}>
                <Text style={styles.Text_I524_331_479_374}>W</Text>
              </View>
            </View>
            <View style={styles.View_I524_331_479_375}>
              <View style={styles.View_I524_331_479_376} />
              <View style={styles.View_I524_331_479_377}>
                <Text style={styles.Text_I524_331_479_377}>Q</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_535_35}>
          <View style={styles.View_535_36} />
        </View>
      </View>
      <View style={styles.View_597_474}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba5c/4c41/2c404324aa3ac22df3dad7b103975218"
          }}
          style={styles.ImageBackground_597_475}
        />
        <View style={styles.View_597_514}>
          <Text style={styles.Text_597_514}>Elon</Text>
        </View>
        <View style={styles.View_597_515}>
          <Text style={styles.Text_597_515}>AstraZeneca Vaccine</Text>
        </View>
        <View style={styles.View_597_516}>
          <Text style={styles.Text_597_516}>Flutterwave</Text>
        </View>
        <View style={styles.View_597_517}>
          <Text style={styles.Text_597_517}>CBN</Text>
        </View>
        <View style={styles.View_597_518}>
          <Text style={styles.Text_597_518}>Okonjo-Iweala</Text>
        </View>
        <View style={styles.View_597_519}>
          <Text style={styles.Text_597_519}>Ronaldo</Text>
        </View>
        <View style={styles.View_597_520}>
          <Text style={styles.Text_597_520}>Musk</Text>
        </View>
        <View style={styles.View_597_521}>
          <Text style={styles.Text_597_521}>Cancel</Text>
        </View>
        <View style={styles.View_597_522}>
          <Text style={styles.Text_597_522}>Recent searches</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f982/8c1c/8437f883dab4c98e84242c8a69300af6"
          }}
          style={styles.ImageBackground_597_523}
        />
        <View style={styles.View_597_526} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
          }}
          style={styles.ImageBackground_597_527}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
          }}
          style={styles.ImageBackground_597_530}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
          }}
          style={styles.ImageBackground_597_533}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
          }}
          style={styles.ImageBackground_597_536}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
          }}
          style={styles.ImageBackground_597_539}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
          }}
          style={styles.ImageBackground_597_542}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
          }}
          style={styles.ImageBackground_597_544}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
          }}
          style={styles.ImageBackground_597_546}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
          }}
          style={styles.ImageBackground_597_548}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
          }}
          style={styles.ImageBackground_597_550}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_524_103: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_524_104: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.57776692708333%"),
    top: hp("1.366120218579235%")
  },
  ImageBackground_524_105: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288899739583329%"),
    top: hp("1.2750344198258194%")
  },
  ImageBackground_524_109: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("1.274667541837432%")
  },
  ImageBackground_524_113: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303278%")
  },
  View_524_120: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("1.9125516297387295%")
  },
  ImageBackground_524_121: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_524_123: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.5136612021857925%")
  },
  Text_524_123: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_524_124: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("21.584699453551913%")
  },
  Text_524_124: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_524_125: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("50.81967213114754%")
  },
  Text_524_125: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_524_126: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("26.229508196721312%")
  },
  Text_524_126: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_524_127: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("26.229508196721312%")
  },
  Text_524_127: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_524_128: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("26.229508196721312%")
  },
  Text_524_128: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_524_137: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_138: {
    width: wp("10.4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_141: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_141: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_144: {
    flexGrow: 1,
    width: wp("27.73333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_145: {
    width: wp("22.400000000000002%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_148: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_148: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_151: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_152: {
    width: wp("22.666666666666664%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_157: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_157: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_158: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_159: {
    width: wp("24.53333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_164: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_164: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_165: {
    flexGrow: 1,
    width: wp("36.8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_166: {
    width: wp("31.466666666666665%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_171: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_171: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_172: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_173: {
    width: wp("8.266666666666666%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_178: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_178: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_179: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_180: {
    width: wp("11.466666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_185: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_185: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_186: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_187: {
    width: wp("21.333333333333336%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_192: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_192: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_193: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.73333333333333%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_194: {
    width: wp("16%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_199: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_199: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_200: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_201: {
    width: wp("16%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_206: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_206: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_207: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_208: {
    width: wp("16%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_213: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_213: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_214: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.666666666666667%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_215: {
    width: wp("9.6%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_220: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_220: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_221: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_222: {
    width: wp("11.200000000000001%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_227: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_227: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_228: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_229: {
    width: wp("10.933333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_234: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_234: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_235: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_236: {
    width: wp("10.133333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_241: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_241: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_242: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_524_243: {
    width: wp("15.733333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_248: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_248: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_249: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("63.52459016393443%"),
    minHeight: hp("63.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("55.60109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_250: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_524_251: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_524_251: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_252: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_253: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_254: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%")
  },
  View_524_255: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_524_255: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_256: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_257: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.612021857923494%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_258: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.387978142076506%")
  },
  View_524_259: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_524_259: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_260: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_261: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.306010928961754%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_262: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.08196721311475%")
  },
  View_524_263: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_524_263: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_264: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_265: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_266: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.77595628415301%")
  },
  View_524_267: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_524_267: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_268: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_269: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.69398907103826%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_270: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519126%")
  },
  View_524_271: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_524_271: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_272: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_273: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.387978142076506%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_274: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.16393442622952%")
  },
  View_524_275: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_524_275: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_276: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_277: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.081967213114766%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_278: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.85792349726775%")
  },
  View_524_279: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557379915%")
  },
  Text_524_279: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_280: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_281: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.77595628415301%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_282: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.55191256830602%")
  },
  View_524_283: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_524_283: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_284: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_524_285: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.46994535519127%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_524_286: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.245901639344254%")
  },
  View_524_287: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_524_287: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_524_288: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("0%")
  },
  View_524_289: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_290: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)"
  },
  View_524_291: {
    width: wp("10.933333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_524_294: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_524_294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_524_297: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.31693989071039%")
  },
  View_524_298: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_299: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_524_300: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_524_301: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_524_303: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.033542945736745%"),
    minHeight: hp("8.033542945736745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_524_304: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_305: {
    width: wp("25%"),
    top: hp("5.738238558743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_524_305: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_524_306: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_524_307: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.466666666666669%")
  },
  View_524_309: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8.033542945736745%"),
    minHeight: hp("8.033542945736745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_524_310: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_311: {
    width: wp("25%"),
    top: hp("5.738238558743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_524_311: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_524_312: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_524_313: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.933333333333337%")
  },
  View_524_316: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_317: {
    width: wp("25%"),
    top: hp("5.738238558743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_524_317: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_524_318: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.600000000000001%")
  },
  View_524_322: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_323: {
    width: wp("25%"),
    top: hp("5.738238558743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_524_323: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_524_324: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
  },
  View_524_329: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754088%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_330: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(116, 116, 128, 1)"
  },
  View_535_37: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_524_331: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_424: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I524_331_479_425: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I524_331_479_428: {
    flexGrow: 1,
    width: wp("100.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.61748633879783%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I524_331_479_429: {
    flexGrow: 1,
    width: wp("100.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I524_331_479_281: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    top: hp("31.967213114754102%")
  },
  Text_I524_331_479_281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_282: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("31.967213114754102%")
  },
  Text_I524_331_479_282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_402: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.677595628415304%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I524_331_479_403: {
    width: wp("98.66310221354166%"),
    minWidth: wp("98.66310221354166%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5347574869791667%"),
    top: hp("0.6830601092896273%")
  },
  View_I524_331_479_404: {
    width: wp("23.395719401041667%"),
    minWidth: wp("23.395719401041667%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.26739095052085%"),
    top: hp("0%")
  },
  View_I524_331_479_405: {
    width: wp("23.395719401041667%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I524_331_479_406: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.595719401041663%"),
    top: hp("1.5710382513661187%")
  },
  Text_I524_331_479_406: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I524_331_479_407: {
    width: wp("48.66310221354166%"),
    minWidth: wp("48.66310221354166%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.999999999999996%"),
    top: hp("0%")
  },
  View_I524_331_479_408: {
    width: wp("48.66310221354166%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 254, 254, 1)"
  },
  View_I524_331_479_409: {
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.53047688802084%"),
    top: hp("1.4344262295081904%")
  },
  Text_I524_331_479_409: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I524_331_479_410: {
    width: wp("10.96256612141927%"),
    minWidth: wp("10.96256612141927%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.433154296875%"),
    top: hp("0%")
  },
  ImageBackground_I524_331_479_411: {
    width: wp("10.96256612141927%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I524_331_479_412: {
    width: wp("5.2139027913411455%"),
    height: hp("2.663934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8074869791666686%"),
    top: hp("1.5027322404371546%")
  },
  View_I524_331_479_413: {
    width: wp("5.2139027913411455%"),
    minWidth: wp("5.2139027913411455%"),
    height: hp("2.663934426229508%"),
    minHeight: hp("2.663934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I524_331_479_414: {
    width: wp("5.2139027913411455%"),
    height: hp("2.663934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I524_331_479_417: {
    width: wp("0.6684488932291667%"),
    height: hp("0.34153005464480873%"),
    top: hp("0.7513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4705891927083314%")
  },
  ImageBackground_I524_331_479_418: {
    width: wp("0.6684509277343751%"),
    height: hp("0.34153005464480873%"),
    top: hp("0.7513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.074861653645833%")
  },
  ImageBackground_I524_331_479_419: {
    width: wp("3.750505574544271%"),
    height: hp("0.8954353019839427%"),
    top: hp("1.3689051560365328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7502685546874979%")
  },
  ImageBackground_I524_331_479_420: {
    width: wp("2.8954437255859373%"),
    height: hp("0.3038164044989914%"),
    top: hp("1.5609324304132457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1583333333333314%")
  },
  View_I524_331_479_421: {
    width: wp("10.82887674967448%"),
    minWidth: wp("10.82887674967448%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I524_331_479_422: {
    width: wp("10.82887674967448%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I524_331_479_423: {
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.997151692708333%"),
    top: hp("1.5710382513661187%")
  },
  Text_I524_331_479_423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I524_331_479_284: {
    flexGrow: 1,
    width: wp("98.4%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("16.120218579234987%")
  },
  View_I524_331_479_285: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("0%")
  },
  ImageBackground_I524_331_479_286: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I524_331_479_287: {
    width: wp("6.031380208333333%"),
    minWidth: wp("6.031380208333333%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.639344262295083%")
  },
  View_I524_331_479_288: {
    width: wp("6.031382242838541%"),
    minWidth: wp("6.031382242838541%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I524_331_479_289: {
    width: wp("6.031382242838541%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I524_331_479_292: {
    width: wp("1.7541759490966795%"),
    height: hp("0.8976961745590459%"),
    top: hp("0.7797157829576378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7459635416666828%")
  },
  View_I524_331_479_295: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.06666666666668%"),
    top: hp("0%")
  },
  View_I524_331_479_296: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_297: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5333333333333314%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_297: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_298: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("0%")
  },
  View_I524_331_479_299: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_300: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9333333333333513%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_300: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_301: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.06666666666667%"),
    top: hp("0%")
  },
  View_I524_331_479_302: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_303: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_303: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_304: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    top: hp("0%")
  },
  View_I524_331_479_305: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_306: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.200000000000003%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_306: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_307: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("0%")
  },
  View_I524_331_479_308: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_309: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.066666666666663%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_310: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.933333333333334%"),
    top: hp("0%")
  },
  View_I524_331_479_311: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_312: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_312: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_313: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    top: hp("0%")
  },
  View_I524_331_479_314: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_315: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333346%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_316: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I524_331_479_317: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I524_331_479_318: {
    width: wp("5.085188293457031%"),
    height: hp("2.1977382930901532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0575520833333334%"),
    top: hp("1.7640160732581904%")
  },
  View_I524_331_479_319: {
    flexGrow: 1,
    width: wp("88.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.733333333333333%"),
    top: hp("8.743169398907114%")
  },
  View_I524_331_479_320: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.13333333333334%"),
    top: hp("0%")
  },
  View_I524_331_479_321: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_322: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_323: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    top: hp("0%")
  },
  View_I524_331_479_324: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_325: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666515%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_325: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_326: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.133333333333326%"),
    top: hp("0%")
  },
  View_I524_331_479_327: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_328: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4666666666666686%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_328: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_329: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("0%")
  },
  View_I524_331_479_330: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_331: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.93333333333333%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_332: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.13333333333333%"),
    top: hp("0%")
  },
  View_I524_331_479_333: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_334: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_334: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_335: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  View_I524_331_479_336: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_337: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_338: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_I524_331_479_339: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_340: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.06666666666667%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_341: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  View_I524_331_479_342: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_343: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.333333333333334%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_343: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_344: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I524_331_479_345: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_346: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_347: {
    flexGrow: 1,
    width: wp("98.4%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.3661202185792405%")
  },
  View_I524_331_479_348: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("0%")
  },
  View_I524_331_479_349: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_350: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.333333333333343%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_350: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_351: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    top: hp("0%")
  },
  View_I524_331_479_352: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_353: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.933333333333323%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_354: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%")
  },
  View_I524_331_479_355: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_356: {
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_357: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  View_I524_331_479_358: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_359: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_359: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_360: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I524_331_479_361: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_362: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666657%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_363: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_I524_331_479_364: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_365: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666657%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_365: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_366: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  View_I524_331_479_367: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_368: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.333333333333332%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_369: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_I524_331_479_370: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_371: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.466666666666665%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_371: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_372: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  View_I524_331_479_373: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_374: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1999999999999993%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I524_331_479_375: {
    width: wp("8.4%"),
    minWidth: wp("8.4%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I524_331_479_376: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I524_331_479_377: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9333333333333333%"),
    top: hp("0.9904371584699447%")
  },
  Text_I524_331_479_377: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_535_35: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("35.24590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_535_36: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(116, 116, 128, 1)"
  },
  View_597_474: {
    width: wp("91.46666666666667%"),
    height: hp("35.79234972677596%"),
    top: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_597_475: {
    width: wp("91.46666666666667%"),
    height: hp("35.79234972677596%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_597_514: {
    width: wp("8%"),
    top: hp("1.9884620207906405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  Text_597_514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_515: {
    width: wp("39.2%"),
    top: hp("12.640947852629782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  Text_597_515: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_516: {
    width: wp("21.866666666666667%"),
    top: hp("17.186007473638146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  Text_597_516: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_517: {
    width: wp("8.533333333333333%"),
    top: hp("21.731067094646512%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  Text_597_517: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_518: {
    width: wp("27.73333333333333%"),
    top: hp("26.276126715654883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  Text_597_518: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_519: {
    width: wp("15.733333333333333%"),
    top: hp("30.821186336663253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  Text_597_519: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_520: {
    width: wp("9.6%"),
    top: hp("1.9884620207906405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%")
  },
  Text_597_520: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_521: {
    width: wp("8.266666666666666%"),
    top: hp("1.9884620207906405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  Text_597_521: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_522: {
    width: wp("24.8%"),
    top: hp("7.811824610975922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  Text_597_522: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_597_523: {
    width: wp("3.733298746744792%"),
    height: hp("1.9883661322254953%"),
    top: hp("2.414582466167179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  View_597_526: {
    width: wp("0.26666666666666666%"),
    height: hp("2.1304980001814378%"),
    top: hp("2.2725256414361326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_597_527: {
    width: wp("3.733333333333334%"),
    height: hp("1.988464105324667%"),
    top: hp("12.925011473275276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  ImageBackground_597_530: {
    width: wp("3.733333333333334%"),
    height: hp("1.988464105324667%"),
    top: hp("17.47007943241974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  ImageBackground_597_533: {
    width: wp("3.733333333333334%"),
    height: hp("1.988464105324667%"),
    top: hp("22.015139053428108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  ImageBackground_597_536: {
    width: wp("3.733333333333334%"),
    height: hp("1.988464105324667%"),
    top: hp("26.56019867443647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  ImageBackground_597_539: {
    width: wp("3.733333333333334%"),
    height: hp("1.988463844757914%"),
    top: hp("31.10525829544484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  ImageBackground_597_542: {
    width: wp("3.2%"),
    height: hp("1.7043984001451504%"),
    top: hp("13.067043283598021%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%")
  },
  ImageBackground_597_544: {
    width: wp("3.2%"),
    height: hp("1.7043994424121627%"),
    top: hp("17.612111242742486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%")
  },
  ImageBackground_597_546: {
    width: wp("3.2%"),
    height: hp("1.7043973578781377%"),
    top: hp("22.157170863750856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%")
  },
  ImageBackground_597_548: {
    width: wp("3.2%"),
    height: hp("1.7043984001451504%"),
    top: hp("26.70223048475922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%")
  },
  ImageBackground_597_550: {
    width: wp("3.2%"),
    height: hp("1.7043978790116439%"),
    top: hp("31.24729010576759%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
