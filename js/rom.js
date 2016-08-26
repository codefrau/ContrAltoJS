/*
 JsAlto Xerox Alto Emulator
 Copyright (C) 2016  Seth J. Morabito

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see
 <http://www.gnu.org/licenses/>.
 */


//
// ROM images
//

// Control ROM

var CROM = [
    0x0000, 0x0001, 0x0002, 0xfffe, 0xffff, 0xffff, 0x000f, 0xffff,
    0x0003, 0x0004, 0x0005, 0x0006, 0x0007, 0x0008, 0xfff8, 0xfff8,
    0x0010, 0x001f, 0x0020, 0x003f, 0x0040, 0x007f, 0x0080, 0x0007,
    0x00ff, 0xff00, 0x0400, 0x0100, 0x0110, 0x0151, 0x0114, 0x000f,
    0x0116, 0x0118, 0x0ffa, 0xf000, 0x4000, 0xfffc, 0xfff6, 0xffeb,
    0x4800, 0x6c00, 0x0800, 0x1000, 0xfe00, 0x7fff, 0x7fe0, 0x7f00,
    0xffbd, 0x0f00, 0x0f0f, 0xf0f0, 0x6048, 0x3000, 0x7159, 0x2109,
    0x6a3c, 0x4213, 0xa5a5, 0xfe1c, 0x3f00, 0xffc0, 0x012a, 0x0140,
    0x8000, 0xffe0, 0x00bf, 0xfff9, 0xfff0, 0xfffd, 0x0970, 0x5d20,
    0x3844, 0x6814, 0xfc00, 0xfe20, 0xfe22, 0x0083, 0x00f0, 0xff80,
    0xf800, 0xe000, 0xc000, 0x01ff, 0x03ff, 0x07ff, 0x0fff, 0x1fff,
    0x3fff, 0x0200, 0x2000, 0xfff1, 0x0156, 0x0157, 0x0138, 0x0c00,
    0x0130, 0x1813, 0x0180, 0x0181, 0x0182, 0x0183, 0x0184, 0x0185,
    0x0186, 0x0187, 0x0188, 0x018a, 0x0112, 0x0113, 0x0102, 0xfff0,
    0x0153, 0x0154, 0xffef, 0xffe4, 0xfffb, 0x000a, 0xffc1, 0x001f,
    0x0e00, 0x007e, 0xff7e, 0x0018, 0x000d, 0x03f8, 0x83f9, 0xffe0,
    0xfbff, 0x0009, 0x000b, 0x000c, 0x000e, 0x0030, 0x01fe, 0xff7f,
    0x81ff, 0xffbf, 0xffcc, 0x0557, 0x0041, 0x0198, 0x0199, 0x01a2,
    0xfe72, 0xfe58, 0x0012, 0x0014, 0x00dd, 0x02ff, 0x0101, 0x0001,
    0x0401, 0x0011, 0x0013, 0x0015, 0x0016, 0x0017, 0x0019, 0x0003,
    0x03bd, 0x01de, 0xfe50, 0x00c0, 0x0c01, 0x6200, 0x6300, 0x0008,
    0x6400, 0x6500, 0x6e00, 0x6700, 0x6900, 0x6d00, 0x6600, 0x000c,
    0x6b00, 0x6b01, 0x6b02, 0x6b03, 0x6b04, 0x6b05, 0x6b06, 0x0010,
    0x6b07, 0x6b08, 0x6b09, 0x6b0a, 0x6b0b, 0x6b0c, 0x6b0d, 0x0020,
    0x6b0e, 0x6b0f, 0xfff3, 0xfe14, 0xfe15, 0xfe16, 0x0ffc, 0x0040,
    0x04ff, 0x05ff, 0x06ff, 0x013f, 0x017e, 0xfe7d, 0xffff, 0x0080,
    0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0x00c0,
    0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0x00ff,
    0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff,
    0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff,
    0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff,
    0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff
];

// ACSOURCE ROM

var ACSROM = [
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x02, 0x05, 0x03, 0x06, 0x07, 0x0e, 0x0e, 0x0e,
    0x0e, 0x04, 0x04, 0x0e, 0x0e, 0x0e, 0x01, 0x0e,
    0x0e, 0x0e, 0x0e, 0x0e, 0x0e, 0x0e, 0x0e, 0x0e,
    0x0e, 0x0e, 0x0e, 0x0e, 0x0e, 0x0e, 0x0e, 0x0f,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01,
    0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02,
    0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03,
    0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04,
    0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04,
    0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04,
    0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04,
    0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,
    0x01, 0x00, 0x02, 0x03, 0x04, 0x05, 0x0e, 0x07,
    0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x06, 0x0f,
    0x01, 0x00, 0x02, 0x03, 0x04, 0x05, 0x0e, 0x07,
    0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x06, 0x0f
];

var UROM = [
    0x2811c552, 0x90100405, 0x3cd2742a, 0x3c52742a, 0x7001737c, 0x88100006, 0xa010000f, 0x0007a46a,
    0xf80100e9, 0xc000085e, 0x8002811f, 0x9301002b, 0x1ac17401, 0x08570bf5, 0xcb8097e2, 0x00500813,
    0x35810955, 0x38084a30, 0x3a9005e0, 0x2100041e, 0x3847083d, 0x0003005c, 0xb0160018, 0xb0160019,
    0x1e070c58, 0x19870459, 0x3847082d, 0x02d01c3c, 0x1e070c38, 0x1e070c39, 0x20017026, 0x58517199,
    0xb3021462, 0x00030061, 0x00078020, 0xc0010863, 0x00538067, 0x00528066, 0x23100827, 0x02500428,
    0x00508829, 0x80100002, 0xb810000c, 0xa300142c, 0xa010001a, 0x0050002e, 0x01d09c2f, 0xb016001c,
    0x03f2d596, 0x03f1058b, 0x187015dc, 0x3816019d, 0x03f10197, 0x0000003e, 0x0000003e, 0x0000003e,
    0x9810003a, 0x9810083a, 0xc382043b, 0xc010000b, 0x90910014, 0x01d09c57, 0x0008003f, 0x3816001f,
    0x4007097c, 0x4007058d, 0x3871758d, 0x2011721d, 0x180f061f, 0x1a810623, 0x18000627, 0x18000992,
    0x10084a30, 0x100a0a31, 0x10000a32, 0x40070990, 0x30570a22, 0x00010234, 0x00010239, 0x0001023c,
    0x0b0015c3, 0x080009af, 0xc051723f, 0x00010241, 0x0007065d, 0x100161a7, 0x100161a3, 0x92818016,
    0x9810005a, 0x9810085a, 0x03d0045b, 0x0350085c, 0xc092045d, 0xa010000b, 0x4557085f, 0x9b821460,
    0x98100020, 0x00020068, 0xb0100022, 0x9c800464, 0x03a75465, 0xc0100024, 0x00508023, 0x00528068,
    0x00000009, 0x00000080, 0x58100083, 0x682170b6, 0x0000e0a8, 0x000000a8, 0x501200d2, 0x0000b0d3,
    0x381001e6, 0x381491e6, 0x381491e3, 0x381491e5, 0x381491e7, 0x381601e1, 0x381601df, 0x381601dd,
    0x381601e6, 0x381601e3, 0x381601e5, 0x381601e7, 0x381591e1, 0x381591df, 0x381591dd, 0x381591e6,
    0x000000ac, 0x5890046e, 0xc827049f, 0xc827049f, 0xc817049f, 0xc817049f, 0x5037049f, 0x605170bc,
    0xc817049f, 0x000c0087, 0x000c0087, 0x000000ac, 0xc817049f, 0xc817049f, 0xc817049f, 0xc817049f,
    0x58120092, 0xa81600a6, 0x50006094, 0x501d00a8, 0x60217098, 0x0002a069, 0x000d00a8, 0x0000006b,
    0x200008a0, 0x53021493, 0x5a81c4d1, 0x9057049f, 0x5010009e, 0xc817049f, 0x530018bb, 0x60417090,
    0x580c60b0, 0x0042609c, 0xaa8004c1, 0x5047049f, 0x5890d4a1, 0x1807049b, 0x181b7cb8, 0x000200af,
    0x1817c4ce, 0x680170cf, 0x5092d4b5, 0xc807049f, 0x580c10ba, 0x606170b2, 0x000000ac, 0x000000ad,
    0x015204b1, 0x20100007, 0x000000b3, 0x005014b4, 0x035008aa, 0x5810009a, 0x1807c8b7, 0x01d01491,
    0xac0034b9, 0x000230ae, 0x0002e096, 0x5a81c4a4, 0xf80004bd, 0x581500be, 0x005094bf, 0x501020c0,
    0xa81400a2, 0x605170c2, 0xa81200c3, 0xa80060c4, 0x580004c5, 0x581500c6, 0x180708c7, 0x598204c8,
    0x581000c9, 0x606170ca, 0x500008cb, 0x598004cc, 0x005010cd, 0x501c306c, 0x5810d099, 0x000c00d0,
    0x000090b2, 0x53001881, 0x0050809a, 0x000200d4, 0x000000d5, 0x0000c0d6, 0x00000082, 0x88100008,
    0xf81000fb, 0xf81000da, 0x002708f3, 0x68417104, 0xb8000d0f, 0x881200d7, 0x251170ee, 0xb81204d7,
    0xfe800cf1, 0x00070915, 0x00070d15, 0x00470d15, 0x00470915, 0x02470d15, 0x03970d15, 0x00170915,
    0x01970d15, 0x006040f0, 0x005210ff, 0x00500500, 0x106708f7, 0x2011710a, 0x80000911, 0x00070911,
    0x00370ce0, 0x0d0738f2, 0x51e704d8, 0xfa0108f4, 0xc1e704f5, 0x000230f6, 0x000000ec, 0xfa0100f8,
    0x800304f9, 0x012738fa, 0xfa0100dc, 0x706170fc, 0x01a704fd, 0xc6673cfe, 0x881000ea, 0x481000da,
    0x5b417101, 0xa8100102, 0x04500503, 0xa80234ff, 0x88000505, 0xf8100106, 0x20000907, 0x48006108,
    0x01520509, 0x201000da, 0x0000010b, 0x02d0050c, 0x2011710d, 0xa812010e, 0xa80060ec, 0x14872510,
    0x03a724de, 0xb8900512, 0x80100113, 0x00520514, 0x88100008, 0x18617116, 0xa8100117, 0x03d00518,
    0x00500919, 0xad00091a, 0xa890051b, 0x1861711c, 0x4810011d, 0xa802611e, 0x480060f0, 0x8800900a,
    0x2010000d, 0x00070529, 0x21020520, 0xe00007f7, 0xd80007f7, 0xc00007f7, 0x900007f7, 0x300007f7,
    0x280007f7, 0xf810013a, 0x281201a6, 0x280061ad, 0x68217142, 0x30100010, 0x0021714a, 0x60217147,
    0x0017054e, 0x2807054e, 0x6867054e, 0x6867054e, 0x0017054e, 0x1a87054f, 0x0017054f, 0x18417121,
    0x0807052c, 0x2a900540, 0x0007613b, 0x3831713c, 0x4007053d, 0x2310093e, 0x0250853f, 0x70517138,
    0x28006141, 0x1851712a, 0x00020143, 0x18076144, 0x60217145, 0x002f7146, 0x0007612f, 0x18070948,
    0x02521549, 0x2810012e, 0xc857094b, 0x0550094c, 0x2900054d, 0x00003138, 0x00170950, 0xc8470950,
    0x2b81c951, 0x35100552, 0x30006153, 0x00724154, 0x28100130, 0x2000157e, 0x3090055c, 0x3010015d,
    0x0016a010, 0x0015a010, 0x0014a010, 0x0010a010, 0x38617177, 0x0050cd8a, 0x3871724f, 0x3861724c,
    0x00070830, 0x33000830, 0x08000830, 0x00000830, 0x00070830, 0x33000830, 0x08000830, 0x00000830,
    0x04827558, 0x04027558, 0x03827558, 0x05027558, 0x0482b558, 0x0402b558, 0x0382b558, 0x0182b558,
    0x2802052d, 0x28000994, 0x280101a5, 0x280101a4, 0x280101a7, 0x280101a3, 0x3a8101e9, 0x3010c247,
    0x3d717256, 0x05027651, 0x0050055c, 0x3000055c, 0x2102064e, 0x3010017c, 0x05072556, 0x180005fa,
    0x380205a9, 0x30084a30, 0xf0000b5f, 0x38000abb, 0x380006a0, 0xe801020e, 0x38900629, 0x50370a2d,
    0x30100187, 0x00000040, 0x0000e960, 0x3810018c, 0x0052d596, 0x2857098e, 0x2180258f, 0x2010017a,
    0x21800591, 0x32803440, 0xf9020593, 0xf8100010, 0x30000595, 0x0092052d, 0x28100170, 0x2827c198,
    0x00500831, 0x1017c99a, 0x3000619b, 0x3e00099c, 0x5d670831, 0x985709a0, 0x00000040, 0x0000001f,
    0x047005a1, 0x000051a2, 0x7072419e, 0x0000b52a, 0x004709aa, 0x001709aa, 0x28006010, 0x000001a8,
    0x005205a9, 0x0010b010, 0x03d005ab, 0x280131ac, 0x2810012a, 0x328205ae, 0x30100010, 0x1c0005ba,
    0x180005bc, 0x00000187, 0x180005bc, 0x32820588, 0x109405be, 0x151405be, 0x100009b9, 0x000051c0,
    0x280215c2, 0x1d1005c1, 0x2a9255bb, 0x281401b0, 0x100029bd, 0x1b949db4, 0x080039bf, 0x1c0005b6,
    0x100009b8, 0x101001b8, 0x281401b2, 0x381005c4, 0x0ae275d0, 0x180009d8, 0x100085d1, 0x00000187,
    0x10959dca, 0x3d000dd2, 0x181591d3, 0x001709ca, 0x10959dce, 0x3d000dd5, 0x181591d6, 0x001709ce,
    0x281001c6, 0x180009c8, 0x100055c8, 0x100085d4, 0x180009cc, 0x100055cc, 0x2a8215d7, 0x281001c6,
    0x189205d9, 0x101001c7, 0x381005e0, 0x100009de, 0x180009da, 0x38020c7f, 0x01e705dc, 0x38020c7e,
    0x2b9005e2, 0x38020c7d, 0x380041e4, 0x38020c71, 0x00020070, 0x38020c72, 0x280241e8, 0x38020c73,
    0x00000180, 0x006709f0, 0x280009f9, 0x600709fd, 0x3e800610, 0x380061ff, 0x40100209, 0x1300061a,
    0x01d005f1, 0x000109f2, 0x101001f3, 0x03d205f4, 0x001001f5, 0x028101f6, 0x181709f7, 0x01d0c5f8,
    0x4016017f, 0xeb8005fa, 0xe81001fb, 0x430215fc, 0x401001ea, 0x13810a00, 0xea810216, 0x43001e08,
    0x00700601, 0x40100202, 0x00500603, 0xf5120604, 0x10100205, 0x08270606, 0x2802c207, 0x281001ff,
    0x048101ee, 0x00700a0a, 0xeb80060b, 0x00500a0c, 0x1000420d, 0xe8920470, 0xf0001a0f, 0x3e0009ec,
    0x01500a11, 0x38900612, 0xa8100213, 0xe8010214, 0x38021215, 0xa80061fe, 0x38000a17, 0x01500618,
    0xea810219, 0x381201ed, 0x1010021b, 0x6017c21c, 0x00520559, 0xf800061e, 0x101001a8, 0x28570a20,
    0x01ae0621, 0x1812022f, 0x0b870621, 0x18100226, 0x10704188, 0x10704189, 0x00500627, 0x02801a28,
    0x13810186, 0x0012022a, 0x3800622b, 0x2000162c, 0x33002624, 0x3500062e, 0x3182562f, 0x38100010,
    0x00000000, 0x004275a9, 0x18090633, 0x00000587, 0x00000235, 0x00500636, 0x00500a37, 0x18920638,
    0x10100010, 0x0000023a, 0x1802623b, 0x10006010, 0x0000023d, 0x1800623e, 0x10006235, 0x00000240,
    0x0800604e, 0x18000a42, 0x12000643, 0x18006244, 0x00010245, 0x18120246, 0x18006010, 0x20000a48,
    0x01500a49, 0x01d0064a, 0x2890364b, 0x2290055e, 0x2800064d, 0x2002624e, 0x20100010, 0x38100650,
    0x30026251, 0x30100252, 0x28000a53, 0x39800e54, 0x30803e55, 0x38140178, 0x38100257, 0x38000a58,
    0x22000659, 0x00500a5a, 0x2090065b, 0x32920e5c, 0x2815915f, 0x00308262, 0x08170e60, 0x10100187,
    0x0b81026e, 0x0002019f, 0x08370e60, 0x38920664, 0x08400265, 0x10000a66, 0x0c300667, 0x08422268,
    0x0000025e, 0xf092066a, 0x4010026b, 0x70570e60, 0x18c2066d, 0x2040026f, 0x00304270, 0xf0000a71,
    0x00500670, 0x1cb00675, 0x1a920678, 0x1b120678, 0x00500a69, 0x02b02a77, 0x00500a63, 0x06670672,
    0x38400279, 0xf0000a7b, 0x00500a6c, 0x06670a80, 0x3b000a8d, 0xea800a9a, 0x06670a88, 0x0002765f,
    0x3cf17281, 0x04670682, 0xe8100283, 0x00520684, 0x00100285, 0x3b000686, 0x03302a87, 0xf5000a7e,
    0xccb17289, 0x00470a8a, 0x3b30068b, 0x0252368c, 0x4840027c, 0x1bb0068e, 0x1840028f, 0xf3800690,
    0xf0100291, 0xf0000a92, 0x06627693, 0xe8100294, 0x00000a95, 0x48300696, 0x00920697, 0x4840027d,
    0x0817069d, 0x00000a9e, 0x3c80069b, 0x40472a9c, 0x06300a98, 0x2892047c, 0x4e30069f, 0x031006a0,
    0x404002a1, 0x20300aa4, 0x004706a7, 0x10000aa7, 0x440006a5, 0x0b302aa6, 0x000706a2, 0x304002a8,
    0x23b006a9, 0x204002aa, 0x438006ab, 0x429206ac, 0x284002ad, 0x203006ae, 0x101002af, 0x08570ab0,
    0x183006b1, 0x0b8102b2, 0x381002b3, 0x080706b4, 0x281002b5, 0x005006b6, 0x00500ab7, 0xe89206b8,
    0x204002b9, 0x40470aba, 0x3e020c7c, 0xeb8006bc, 0xe81002bd, 0x203006c2, 0x100236c5, 0x10000ac6,
    0x380086c4, 0x3b300ecc, 0x100212c3, 0x381002c0, 0x381502be, 0x101402c0, 0xeb8006c7, 0xe89206c5,
    0x20300aca, 0x043706cd, 0x03b206ce, 0x043206ce, 0x44303ecd, 0x303082c8, 0x204002cf, 0x2b3006d2,
    0x104002d4, 0x180216e0, 0x284022d3, 0x203006d0, 0x400206d5, 0x101002d6, 0xe80006d7, 0xf0000ad8,
    0xf09006d9, 0x00270ab1, 0x18300ae1, 0x18001ae7, 0x00300ae5, 0x38302ae4, 0x383282e0, 0xf01202e6,
    0x0007c2da, 0x3b3006e2, 0x06673ae3, 0x1c8006dc, 0xf38006de, 0x048706dd, 0x1047c2db, 0x3cf172e8,
    0x3b3006ec, 0x00470aea, 0x025006ed, 0x005006ed, 0x000032e9, 0x080102ee, 0x184002ef, 0x00500af0,
    0x03f206f1, 0x0030c2f9, 0x3040231a, 0xf0000af4, 0x13b006f5, 0xf01002f6, 0xe8000af7, 0x23b206f8,
    0xe81002f9, 0x0b300f02, 0x0e0726fc, 0x0002765f, 0xa07212fe, 0xa07212ff, 0x00000305, 0x28400300,
    0x2b300b0c, 0xc0721310, 0x08402303, 0x200016fa, 0x0bc17306, 0x08000b04, 0x08300b07, 0x33000708,
    0x30100309, 0x04d2065f, 0xb8701311, 0x0807071b, 0x85370b0d, 0x0b81030e, 0x0000030f, 0x00500701,
    0x2840030a, 0x38300b12, 0xf4016314, 0xf4010314, 0x00000315, 0x00520716, 0x4010030b, 0x3040231c,
    0x10100323, 0x0000031d, 0xa8724718, 0xa8724318, 0x333006f2, 0x0027071b, 0x000002f3, 0x40300717,
    0xe8016328, 0xe8010328, 0x0242772d, 0xb8701358, 0x02470725, 0xb0701326, 0x28100320, 0xb8701358,
    0x29b00729, 0x28000b2a, 0x06500b2c, 0xb8701358, 0x0132072d, 0x38100333, 0x98704330, 0x2832072d,
    0xe8016b3c, 0xe8010b3c, 0x3bb0074d, 0xb070132e, 0x0150073a, 0x0250073a, 0x04870738, 0x38000b22,
    0x00300b39, 0x01d0073a, 0xb0721340, 0x38000b24, 0x10004332, 0x38000b34, 0x38000b35, 0x38000b36,
    0x38100330, 0x10028346, 0x48300b47, 0x00000b47, 0xe8016b32, 0xe8010b32, 0x28100342, 0x39800748,
    0x3c900749, 0x00300b4a, 0x2e000b4b, 0x3900074c, 0xb072134e, 0x38006350, 0x38100344, 0x00500741,
    0x10024351, 0xe810031c, 0x28940470, 0xf0000b5f, 0x00500b5c, 0x0052075b, 0xf0016359, 0xf0010359,
    0x18300f56, 0x4600375a, 0x3c900754, 0x38100353, 0x0630075d, 0x2892075e, 0x40100360, 0x3bb00764,
    0x28000b61, 0x39000f62, 0x3a903763, 0x18004352, 0xa8724365, 0xf0100333, 0x00270b8d, 0x004c77a2,
    0x08570b91, 0x004707a2, 0x084a73b1, 0xd8100396, 0xd010039b, 0x084a7372, 0xd800639e, 0x0000d372,
    0x000c03b4, 0xd800dba0, 0x00030378, 0xd010b3a1, 0x081a7372, 0x21b707a2, 0x205a737e, 0x280d73a3,
    0x000203b3, 0x00020376, 0x0222776a, 0x0082076a, 0x000c037d, 0x02c76781, 0x1851737f, 0x00000380,
    0x00500781, 0xe0120382, 0x281d7383, 0x70117384, 0x20000b85, 0x01500786, 0x1ad17387, 0x20120388,
    0x00306389, 0x1851738a, 0x082a738b, 0xe002178c, 0xe0006366, 0xe381038e, 0x28070b8f, 0x0252e790,
    0xc8100368, 0xe5010392, 0xc8000b93, 0x01970794, 0x19973795, 0x00503b7a, 0x70017397, 0x20470b98,
    0xdb8f0f99, 0xc80e539a, 0x0252076c, 0x7001739c, 0x2027cb9d, 0xd180076e, 0x0002339f, 0x00000370,
    0x02300772, 0xd0000b74, 0x00033379, 0x40270ba8, 0x08470bac, 0x08370bac, 0x00000004, 0xe001037f,
    0x01b007a9, 0xe28103aa, 0xc81233ab, 0x003063a4, 0xe38103ad, 0x20000bae, 0x015007af, 0xc80213b0,
    0x201003a6, 0x000303b2, 0x000203a6, 0x000003a3, 0x00497773, 0xd81003c2, 0xd01003e5, 0xd01003ef,
    0xd20037ba, 0xd40007d9, 0x000203bc, 0xd80103c3, 0x280d73f4, 0xd01003e5, 0xd28387d1, 0x0003a3f3,
    0xd800080e, 0xd28387e1, 0xd8039bc8, 0xd39007ed, 0x283d73e4, 0x000f73c0, 0xcb0007e3, 0x001f73e4,
    0xe50103d2, 0x000f73be, 0x20570bdc, 0x40570bdc, 0x085b77cd, 0x08170bd8, 0x183b77d5, 0x081a73be,
    0x000a73d1, 0xd01233c9, 0x70237bdc, 0x70337bdc, 0xd0033be9, 0x08270bd8, 0x00433bec, 0xd0030bea,
    0xe38193da, 0x405737f1, 0xd81003ca, 0x704277f2, 0x005007de, 0x002277b5, 0xc89007e0, 0x000303dd,
    0x282d73e1, 0xd01223c5, 0xd81303c4, 0xc81003c4, 0x185277b6, 0xdb000fe6, 0xd81003e7, 0xd80193e8,
    0xcc0007d4, 0x024267b6, 0x025f37eb, 0x000203b6, 0x025017b8, 0xa81203ee, 0xa80063e5, 0xd00f9bf0,
    0x044307d9, 0x280d73d0, 0xd01003be, 0x000003cc, 0x083a77c9, 0x004707f6, 0xc05173f8, 0x6bb173f8,
    0xa89007f9, 0xa80063fa, 0x881003fb, 0x8b004bfc, 0x00000120, 0xfff77bff, 0xfff77bff, 0xfff77bff,
    0x40004001, 0x42901b00, 0xe801640a, 0xe8100002, 0x6a816405, 0x6810100c, 0x0050040e, 0x01d0440d,
    0x00b0440d, 0x6b000412, 0x6810000b, 0x2000100c, 0x18170806, 0x42960f00, 0xc030100f, 0x06300808,
    0x40160100, 0x40100106, 0x68100411, 0x6b816416, 0xc0301015, 0x00520410, 0x20001017, 0x68100014,
    0x00000030, 0x00071030, 0x00000040, 0x7302441f, 0x1817081e, 0x10100050, 0x01d00c59, 0x70100050,
    0x082705ba, 0x081001f5, 0x7280447e, 0x7280447f, 0x45373b0b, 0x75473b21, 0x45373b15, 0x75473b2b,
    0x4537097b, 0x7547097d, 0x000705af, 0x00704018, 0x05070822, 0x7300450a, 0x0000012c, 0x1000401a,
    0x0000425e, 0x5537ca99, 0x0507069f, 0x04827697, 0x1010013d, 0x03b00507, 0x19170822, 0x081000f1,
    0x43810481, 0x45000d60, 0x00070482, 0x01e70463, 0x0bb20515, 0x0bb2053c, 0x2317c473, 0x98a7c553,
    0x0e30099e, 0x3816019b, 0x00384100, 0x002876f7, 0x003f0100, 0x008102aa, 0x0007048e, 0xf014c1d2,
    0x384201f9, 0x04070507, 0xe81001b1, 0x000715af, 0xe81001b4, 0x038171fb, 0x63b005b7, 0x00173904,
    0x2877c01b, 0x8030dc6b, 0x8830dc6b, 0x9030dc6b, 0x9830dc6b, 0xa030dc6b, 0xa830dc6b, 0xb030dc6b,
    0xb830dc6b, 0x1e07d85c, 0x4000d85f, 0x6a816467, 0x42960420, 0x6a81646f, 0x00500870, 0x40151420,
    0x12900462, 0x10101462, 0xb847c05a, 0x08c20466, 0x1002406a, 0x0bd70464, 0xe8100068, 0x6810001c,
    0xe8004469, 0xe816208f, 0x28400078, 0x00000020, 0x7290086e, 0x7010086e, 0x00f04472, 0x6810d05e,
    0x7280447f, 0x03c70499, 0x00523520, 0xe8100084, 0x7280c46c, 0x7280c46d, 0x73004490, 0x73004491,
    0x5030090c, 0x5ab0090c, 0xa057c13b, 0xb857c01b, 0xb867c01b, 0x083009bc, 0x70920520, 0x70921520,
    0x0007c073, 0x1827c073, 0x40001083, 0x03b10480, 0x00520486, 0xf8000486, 0x38100087, 0x02870888,
    0x75000489, 0xea81008a, 0x7010008b, 0x3800048c, 0x70004130, 0xe8910170, 0x05300c92, 0x00070c64,
    0x70120160, 0x70121160, 0x4000c08d, 0x70120170, 0x00701140, 0x19370498, 0x03300497, 0x0032809c,
    0x0030c09a, 0x02872897, 0x03700499, 0x730204a2, 0xe81500a0, 0xe81590a0, 0x730204a4, 0x00170c64,
    0xea800b00, 0xea800813, 0x701000b8, 0x701000ba, 0x70100388, 0x70100101, 0xe89504b7, 0xe89004b7,
    0x748004aa, 0x748004b2, 0xe8024157, 0x7010d0ae, 0x843034ad, 0x028738a8, 0xe8004380, 0x00270c64,
    0xe81504b7, 0xe81004b7, 0x7010d0ae, 0xe8024157, 0xec8004c2, 0xec0004c2, 0x285708bd, 0x883008ac,
    0x6a820403, 0x40000895, 0x40000895, 0x6a820403, 0x004708bd, 0x8d3004be, 0xe81000c0, 0x08070c64,
    0x007080c1, 0x853008b4, 0x001708c3, 0x748054c4, 0xa07210a2, 0x701000c8, 0x6a820403, 0x63b204ce,
    0x803008c9, 0x6a8164ca, 0x681000cb, 0x8cb004cc, 0x000050cd, 0x005008c6, 0x381000d0, 0x08170c64,
    0x380008d1, 0x83b160d2, 0x000000d3, 0x03500499, 0x45370838, 0x45370839, 0x70120520, 0x70121520,
    0x033244dd, 0x70004490, 0x73000cdc, 0x19270590, 0x709004d8, 0xf0100190, 0x803004e6, 0x08270c64,
    0x883004e6, 0x903004e6, 0x983004e6, 0xa03004e6, 0xa83004e6, 0xb03004e6, 0x007040e7, 0xf0004200,
    0x7300047e, 0x853038e8, 0x30100050, 0x30100051, 0x338874ea, 0x728004ee, 0x00b044f0, 0x08370c64,
    0x18000930, 0x0847c8da, 0x119274fe, 0x1017c8fd, 0xe80204f8, 0xf00040fb, 0x28000cfa, 0x0810050e,
    0xe8150102, 0xe8140102, 0x040724fc, 0xe8020520, 0x3047c0f2, 0x01b204fe, 0x28100102, 0x08470c64,
    0x00070400, 0x6a81640a, 0x2b001503, 0x2810d0f4, 0x73800508, 0x00324108, 0x983277dc, 0x00300822,
    0x40021157, 0x05670831, 0x70100140, 0x70101140, 0x0007c113, 0x2bb10111, 0x1a9008ec, 0x181018ec,
    0x180006db, 0x08300512, 0x0050d914, 0x4557090d, 0x03b10074, 0x08400078, 0x7300452f, 0x281000f6,
    0x28000a74, 0x08000a51, 0x982173dd, 0x0822741d, 0xe8000af2, 0xf00205f6, 0xe8100129, 0x00075904,
    0x80400100, 0x88400100, 0x90400100, 0x98400100, 0xa0400100, 0xa8400100, 0xb0400100, 0xb8400100,
    0x00000139, 0x7300052e, 0x0007c512, 0x31c7c512, 0xa057c116, 0xa067c116, 0xe8006131, 0x7010d140,
    0x00500930, 0x0002e157, 0x80c2e521, 0x88c2e522, 0x90c2e523, 0x98c2e524, 0xa0c2e525, 0xa8c2e526,
    0xb0c2e527, 0x00270831, 0x00270831, 0x50300913, 0x0840007a, 0x1007c8db, 0xe8900549, 0x4381011e,
    0xeb010076, 0x83b10074, 0x8bb10074, 0x93b10074, 0x9bb10074, 0xa3b10074, 0xabb10074, 0xb3b10074,
    0xbbb10074, 0xf012014a, 0x1000614b, 0xf3010129, 0xe810014e, 0x30c00550, 0x23b00552, 0x0081011e,
    0xc017c05a, 0xc017c05b, 0x00500954, 0x204000da, 0x40117155, 0x38c00556, 0x3812015b, 0x70100100,
    0x0050095e, 0x9037c0da, 0x0030615e, 0xe8006187, 0x32b0455d, 0x30c00558, 0x40117169, 0x00000139,
    0x0007c08d, 0x80306100, 0x88306100, 0x90306100, 0x98306100, 0xa0306100, 0xa8306100, 0xb0306100,
    0xb8306100, 0x30304180, 0x02b244dd, 0x40021157, 0x7010016e, 0x7002441f, 0x4380057a, 0x4501093e,
    0x73004493, 0x000003ff, 0x88306094, 0x90306094, 0x98306094, 0xa0306094, 0xa8306094, 0xb0306094,
    0xb8306094, 0x7300056a, 0x0032817c, 0x53b00507, 0x28150188, 0x5bb00507, 0xe8000982, 0x00b00d4c,
    0x38006180, 0xf280447e, 0x2b810186, 0xf0020557, 0x301001ac, 0x383101ae, 0x0030098b, 0x3831615c,
    0x1817057e, 0x1807057e, 0xf00081cd, 0x0070818e, 0x01d20598, 0x06d0059c, 0x0840218c, 0x7300056c,
    0x0030c0da, 0x883008de, 0x903008e0, 0x983008e1, 0xa03008e2, 0xa83008e3, 0xb03008e4, 0xb83008e5,
    0xe810019a, 0xe816019a, 0xe8000823, 0x38000840, 0xf012041d, 0xf292041d, 0xf100059f, 0xe80009a0,
    0x2b8101a1, 0x000201a2, 0x00306101, 0x06b005a4, 0xe81001a5, 0x1e0009a8, 0x0e300823, 0x083009a3,
    0xe90205a9, 0x381001aa, 0x283019ab, 0x60770584, 0x140875ad, 0x38000812, 0x730005b0, 0xf092c5b2,
    0x380260a5, 0x8022741d, 0x3840005b, 0x384001b5, 0x9817c8da, 0x181709b6, 0xe9800c59, 0x003009b8,
    0x002705af, 0x438105c6, 0x1010003b, 0x438161c7, 0x638171bf, 0x000001be, 0x100008ed, 0x2d3009c0,
    0x01e705c1, 0x284001c2, 0x005205c3, 0x084001c4, 0xf00041c5, 0x383009b9, 0x384001c7, 0x683705c8,
    0x301001c9, 0x005809ca, 0x28300412, 0x1008077a, 0x3047c37d, 0x38000da6, 0x7280447e, 0x03a1727c,
    0xa817c1f5, 0x08001683, 0x553275d3, 0x304001d8, 0x005205de, 0xf002d5e2, 0xe81501e3, 0xe81501e3,
    0x303105d9, 0x080709da, 0x01d00ddb, 0xe89105dc, 0xe80041dd, 0x384001d4, 0xe81001df, 0x303101e0,
    0x3830dde1, 0xe80061ce, 0xf01401d0, 0xe80205e4, 0xe81501e5, 0xe80009d2, 0x3b3101ef, 0x005009eb,
    0x08000a48, 0x00000100, 0x38300af6, 0x553175ec, 0x304001ed, 0x005005ee, 0x383101f0, 0x000001e7,
    0xe81201f1, 0xe80061f2, 0x303101f3, 0x0002d1f4, 0x383061e8, 0x60300a17, 0x684001f8, 0x08970e84,
    0x08370a9a, 0x3047c1e6, 0x7547084d, 0x487709fc, 0x065009fd, 0x43800e15, 0x483006cb, 0x428877e0,
    0x03b2e520, 0x0432e520, 0x01b2e520, 0x0132e520, 0x0232e520, 0x109004f7, 0x109014f7, 0x1090c50f,
    0xe8920517, 0x00b00d30, 0xe810018f, 0xe810018f, 0x00b00d3f, 0x00b00d4f, 0x00b00e0f, 0x1a9005af,
    0x00b00d6f, 0x1a9015af, 0x0430011f, 0x4011717f, 0x00300987, 0x05300823, 0x4000121a, 0x6c000616,
    0x0402761b, 0x0502761b, 0x00300a18, 0x3810021c, 0x0007061d, 0x08270a1e, 0x54310a1f, 0x40100220,
    0x45370621, 0x38006222, 0x4842d223, 0x50400118, 0x68000e60, 0xe802066e, 0x0bb70630, 0x08470a9a,
    0x00528637, 0x80270a47, 0x40117238, 0x08570a47, 0x1802263b, 0x38010a3c, 0x18000a2f, 0xf1020642,
    0x50400231, 0x00500a32, 0x00500633, 0x03917234, 0x68900635, 0x05173636, 0x38100228, 0x6040022a,
    0x80370a39, 0x01d0063a, 0xf010023b, 0x1c15062c, 0x03a7063d, 0x5840023e, 0x18170a3f, 0x01d00e40,
    0x0e073a41, 0x4011722e, 0x00306243, 0x60316244, 0x0002d245, 0x00176224, 0x7800864e, 0x08000698,
    0x09870652, 0x28000a75, 0x23d172a0, 0x7896064f, 0x78150248, 0x0070064b, 0x0070424c, 0x78400250,
    0x08170a9a, 0x0007c246, 0x00b04653, 0x00813254, 0x0007c226, 0xe8150265, 0x00000273, 0x80270a47,
    0x4010025c, 0x0000025a, 0x63b16405, 0x64316662, 0xb007c263, 0x64300664, 0x02950b00, 0x02901b00,
    0x00001261, 0x00072658, 0x68100015, 0x63b16467, 0x68101430, 0x28149266, 0x28020667, 0x28160268,
    0x28020669, 0x2814026a, 0x28000a6b, 0x56470a6c, 0x9551726d, 0x3047c226, 0x2815026f, 0x28000a70,
    0x16170a71, 0x6d020672, 0x28140249, 0x00500a48, 0x0017c246, 0x63b16276, 0x63300a77, 0x3047c278,
    0x03d00679, 0x00500a7a, 0x6810027b, 0x1e0709d2, 0x0bb7067d, 0x5040027e, 0x4830627f, 0x00810280,
    0x08170a81, 0x5c320682, 0x00306004, 0x2b0009f6, 0x5c310285, 0x28140286, 0x2b000687, 0x48770a88,
    0x06500a89, 0x03b005f6, 0x3047c021, 0x00000023, 0x3801028f, 0xf001628f, 0x58300a90, 0x00701296,
    0x75417a91, 0xeb800e92, 0x38100293, 0x63b00694, 0x00528295, 0xf010028c, 0x00500e8a, 0xe810028e,
    0x7040029a, 0x13c1728f, 0x55370a9b, 0x13c1729c, 0x0000029d, 0x0052069e, 0x08100119, 0x2814c421,
    0x453706a2, 0x0027c246, 0x384002a3, 0x005006a4, 0x0812c6a5, 0x484001e6, 0x40000aa7, 0x0c0206a8,
    0x00306101, 0x0487c697, 0x008006ab, 0x483062ac, 0x02b102ad, 0x4840029d, 0x000202b0, 0x483012ae,
    0x000762b2, 0x48306100, 0x0a8102b3, 0x000202b1, 0xf00042bd, 0x40370abc, 0xe81002b7, 0x22e70ab8,
    0x503006cb, 0x43b706ba, 0x050756bb, 0xf41006b4, 0xb83006cb, 0x281002c0, 0x206709fe, 0x28000acb,
    0x007042be, 0x803006bf, 0x883006bf, 0x903006bf, 0x983006bf, 0xa03006bf, 0xa83006bf, 0xb03006bf,
    0x72800ab9, 0x700006bf, 0xe8121557, 0xf51006cc, 0xec0102cd, 0x2c1006ce, 0x003242cf, 0xf00062c0,
    0x80400119, 0x884002e7, 0x904002e7, 0x984002e7, 0xa04002e7, 0xa84002e7, 0xb04002e7, 0xb84002e7,
    0x701002e0, 0x081002e7, 0x484002e7, 0xe810c37d, 0x08470add, 0xeb8102e8, 0x70570add, 0x00121157,
    0x70000ae1, 0x199706e2, 0x001602e3, 0x06670ee4, 0x43b706e5, 0x008026e6, 0x75100adc, 0x28000add,
    0x03c706e9, 0x289006ea, 0x003042eb, 0x005206d0, 0x55300aed, 0x0d6276ee, 0xe810c2b7, 0xe81206f0,
    0x401002f1, 0xa807c1f5, 0x53b206db, 0x543206f4, 0x384002f5, 0xa057c1e6, 0x438206db, 0x00b04508,
    0x181002fa, 0x803206f8, 0x000276fc, 0x88320764, 0x701002fe, 0x90320768, 0x02f00bf2, 0xb037c362,
    0x6b820403, 0xa047c33d, 0x100172ff, 0x0817c2fd, 0x6867c33d, 0x0827c2f9, 0x0837c2f9, 0x0847c2fd,
    0x54b10074, 0x53310074, 0x50310074, 0x53b10074, 0x55310074, 0x08073b0b, 0x08173b0b, 0x08273b0b,
    0xa807c05a, 0x503008d4, 0x54b10076, 0x53310076, 0x50310076, 0x53b10076, 0x55310076, 0x08073b15,
    0x08173b15, 0x08273b15, 0xa827c05a, 0x54b130d9, 0x533130d9, 0x503130d9, 0x53b130d9, 0x5b310074,
    0x58310074, 0x5bb10074, 0x5d310074, 0x08073b21, 0x08173b21, 0x08273b21, 0x08373b21, 0xa817c05a,
    0x5d3008d4, 0x5b310076, 0x58310076, 0x5bb10076, 0x5d310076, 0xa837c05a, 0x728044d6, 0x7280447e,
    0x00270822, 0x08070822, 0x08170822, 0x08270822, 0x08370822, 0x00470822, 0x40070822, 0xa057c05a,
    0x0007c05d, 0xb067c05a, 0x4817c05a, 0xa847c05a, 0x0810033e, 0x8031d33f, 0x88320766, 0x40070b62,
    0x0007382d, 0x0017382d, 0x0027382d, 0x0807382d, 0x0817382d, 0xa857c05a, 0x0007092c, 0x0017092c,
    0x0027092c, 0xa867c05a, 0x3807c01b, 0x0067c8da, 0xb817c01b, 0xb837c01b, 0xb827c01b, 0x0832741d,
    0x7057c8da, 0x8027c8da, 0x08070460, 0x08170460, 0x00070460, 0x00170460, 0x00270460, 0x54b1012a,
    0x7847c8da, 0x8037c8db, 0x8047c8da, 0xb047c01b, 0x8042741d, 0x7052741d, 0x8032741d, 0x06b03d4d,
    0x00b03d4d, 0x3010c3be, 0x0050e767, 0x0450e767, 0x101002f9, 0x00b26557, 0x1010036a, 0x8031336c,
    0x081002fb, 0x70100301, 0xc0301370, 0x0007c103, 0x00870f64, 0x02870b64, 0x02827768, 0x3047c103,
    0xa067c3be, 0x8032073c, 0x503008d5, 0x5d3008d5, 0x7280456b, 0x73023557, 0x8017c179, 0x54b102a6,
    0xa057c16d, 0x0067041d, 0x88400105, 0x9027c8da, 0x201003bc, 0x40070b7e, 0x2680d7a6, 0x30100454,
    0x00170496, 0x00270496, 0x08070496, 0x08170496, 0x08270496, 0x08370496, 0x08470496, 0x08570496,
    0x40000895, 0x3047c05d, 0x30e7c4a6, 0x30c7c4a6, 0xa0d7c4a6, 0xa0e7c4a6, 0xa887c4a6, 0xa897c4a6,
    0xa8a7c4a6, 0xa8b7c4a6, 0x4817c0a7, 0x30e7c4b0, 0x30c7c4b0, 0xa0d7c4b0, 0xa0e7c4b0, 0xa887c4b0,
    0xa897c4b0, 0xa8a7c4b0, 0xa8b7c4b0, 0x4817c0b1, 0x0857c0b6, 0x0007c0b6, 0x0017c0b6, 0x8017c0b6,
    0x0857c0bc, 0x0007c0bc, 0x0017c0bc, 0x8017c0bc, 0x8030109b, 0x8030109e, 0x201006de, 0x748204c5,
    0x0007c8da, 0x0017c8da, 0x0827c8da, 0xb057c01b, 0x0837c8da, 0xb807c01b, 0x8012741d, 0x2817c01b,
    0x0027c8da, 0x0807c8da, 0x0817c8da, 0x0857c8da, 0x08187505, 0x08287505, 0x08387505, 0x08487505,
    0x8b3008e9, 0x20000bbd, 0xc0400100, 0xc0400004, 0xa057c1f5, 0x015207d9, 0x40070bdf, 0x8828777f,
    0x0317c833, 0x0017c833, 0x0027c833, 0x0807c833, 0x0817c833, 0x0827c833, 0x0837c833, 0x0847c833,
    0x0857c833, 0x8017c833, 0x7057c833, 0x8027c833, 0x8037c833, 0x7847c833, 0x8047c833, 0x0067c833,
    0xb037c05a, 0x0027069f, 0x0807069f, 0x0817069f, 0x0827069f, 0x0837069f, 0x0847069f, 0x0857069f,
    0x8017069f, 0x201003da, 0x400013db, 0xc33207ba, 0x301003bc, 0x0017c3de, 0x005006b6, 0x2102d77c,
    0x60400010, 0xb027c05a, 0x3047c01b, 0x50300aa1, 0x40000aa9, 0xa067c1f5, 0x080102af, 0xb017c05a,
    0x583009fa, 0x7842741d, 0xb848036b, 0xb8c806f7, 0xb848036f, 0xfff77bff, 0x0842741d, 0x0852741d,
    0xc2b207ba, 0x386173b9, 0x9bb70761, 0x6a820403, 0xc007c05a, 0xb8400371, 0x0812741d, 0x0022741d,
    0x40000aec, 0x400006ef, 0x08370af3, 0xfff77bff, 0x0802741d, 0x000876f7, 0x40100831, 0x00270831
];

var MicrocodeBank = {
    ROM0: 0,
    ROM1: 1,
    RAM0: 2,
    RAM1: 3,
    RAM2: 4
};

var MicroInstruction = function (code) {

    // Decode fields
    this.rselect = (code >>> 27) & 0x1f;
    this.aluf = (code >>> 23) & 0x0f;   // ALU Function
    this.bs = (code >>> 20) & 0x07;   // Bus Source
    this.f1 = (code >>> 16) & 0x0f;   // Special Function 1
    this.f2 = (code >>> 12) & 0x0f;   // Special Function 2
    this.loadT = ((code >>> 11) & 1) !== 0;
    this.loadL = ((code >>> 10) & 1) !== 0;
    this.next = code & 0x3ff;

    // Whether this instruction references constant memory

    this.constantAccess = (this.f1 == SpecialFunction1.CONSTANT ||
    this.f2 == SpecialFunction2.CONSTANT);

    this.constantAccessOrBS4 = (this.constantAccess || this.bs > 4);

    // Constant ROM access
    //
    // "The constant memory is gated to the bus by F1=7, F2=7, or
    // BS > 4. The constant memory is addressed by the (8 bit)
    // concatenation of RSELECT and BS. The intent in enabling
    // constants with BS>4 is to provide a masking facility,
    // particularly for the <-MOUSE and <-DISP bus sources. This works
    // because the processor bus ANDs if more than one source is gated
    // to it. Up to 32 such mask contans can be provided for each of
    // the four bus sources > 4."
    //
    // NOTE also:
    //
    // "Note that the [emulator task F2] functions which replace the
    // low bits of RSELECT with IR affect only the selection of R;
    // they do not affect the address supplied to the constant ROM."
    // Hence this can be statically cached without issue.
    this.constantValue = CROM[(this.rselect << 3) | this.bs];

    // Whether this instruction needs the Shifter output This is the
    // only task-specific thing we cache, even if this isn't the right
    // task, worst-case we'll do an operation we didn't need to.
    this.needShifterOutput = (this.f2 == EmulatorF2.LOAD_DNS ||
    this.f2 == SpecialFunction2.SHEQ0 ||
    this.f2 == SpecialFunction2.SHLT0);

    // Whether this instruction accesses memory
    this.memoryAccess = ((this.bs == BusSource.READ_MD && !this.constantAccess) ||
    this.f1 == SpecialFunction1.LOAD_MAR ||
    this.f2 == SpecialFunction2.STORE_MD);

    if (this.memoryAccess) {
        if (this.f1 == SpecialFunction1.LOAD_MAR) {
            this.memoryOperation = MemoryOperation.LOAD_ADDRESS;
        } else if (this.bs == BusSource.READ_MD) {
            this.memoryOperation = MemoryOperation.READ;
        } else {
            this.memoryOperation = MemoryOperation.STORE;
        }
    } else {
        this.memoryOperation = MemoryOperation.NONE;
    }

    switch (this.aluf) {
        case AluFunction.BUS:
        case AluFunction.BUS_OR_T:
        case AluFunction.BUS_PLUS_1:
        case AluFunction.BUS_MINUS_1:
        case AluFunction.BUS_PLUS_T_PLUS_1:
        case AluFunction.BUS_PLUS_SKIP:
        case AluFunction.ALU_BUS_AND_T:
            this.loadTFromALU = true;
            break;
        default:
            this.loadTFromALU = false;
    }
};

MicroInstruction.prototype = {
    toString: function () {
        return ("RSELECT=" + this.rselect.toString(8) +
        " ALUF=" + this.aluf +
        " BS=" + this.bs +
        " F1=" + this.f1 +
        " F2=" + this.f2 +
        " LoadT=" + (this.loadT ? "1" : "0") +
        " LoadL=" + (this.loadL ? "1" : "0") +
        " NEXT=" + this.next.toString(8));
    }
};

var uCodeMemory = {

    URAM_LENGTH: 0xc00,

    bitMask: 0x00088400,
    invertedBitMask: 0xfff77bff,

    // Microcode RAM (up to 3KB -- three 1KB banks)
    uCodeRam: [],

    // Cache of decoded MicroInstructions
    decodeCache: [],

    microcodeBank: [],
    ramAddr: 0,
    ramBank: 0,
    ramSelect: true,
    lowHalfsel: true,

    reset: function () {
        this.init();
    },

    init: function () {
        this.cacheMicrocodeRom();

        // Clear the RAM
        var i;

        for (i = 0; i < this.URAM_LENGTH; i++) {
            this.uCodeRam[i] = 0;
        }

        // Precache empty RAM
        for (i = 0; i < this.URAM_LENGTH; i++) {
            this.updateRamCache(i);
        }

        // Start in ROM0
        for (i = 0; i < 16; i++) {
            this.microcodeBank[i] = MicrocodeBank.ROM0;
        }

        this.ramAddr = 0;
        this.ramBank = 0;
        this.ramSelect = true;
        this.lowHalfsel = true;
    },

    loadBanksFromRMR: function (rmr) {
        for (var i = 0; i < 16; i++) {
            this.microcodeBank[i] = (rmr & (1 << i)) == 0 ?
                MicrocodeBank.RAM0 : MicrocodeBank.ROM0;
        }
    },

    getBank: function (task) {
        return this.microcodeBank[task];
    },

    loadControlRamAddress: function (address) {
        this.ramSelect = (address & 0x800) == 0;
        this.lowHalfsel = (address & 0x400) == 0;
        this.ramAddr = (address & 0x3ff);

        // Clip RAM bank into range, it's always 0 unless we have a 3K
        // uCode RAM system.
        if (Configuration.systemType == SystemType.THREE_K_RAM) {
            this.ramBank = (address & 0x3000) >>> 12;
        } else {
            this.ramBank = 0;
        }
    },

    switchMode: function (nextAddress, task) {
        switch (Configuration.systemType) {
            case SystemType.ALTO_I:
            case SystemType.ONE_K_ROM:
                if (this.microcodeBank[task] == MicrocodeBank.ROM0) {
                    this.microcodeBank[task] = MicrocodeBank.RAM0;
                } else {
                    this.microcodeBank[task] = MicrocodeBank.ROM0;
                }
                break;
            case SystemType.TWO_K_ROM:
                switch (this.microcodeBank[task]) {
                    case MicrocodeBank.ROM0:
                        this.microcodeBank[task] = ((nextAddress & 0x100) == 0) ?
                            MicrocodeBank.RAM0 : MicrocodeBank.ROM1;
                        break;
                    case MicrocodeBank.ROM1:
                        this.microcodeBank[task] = ((nextAddress & 0x100) == 0) ?
                            MicrocodeBank.ROM0 : MicrocodeBank.RAM0;
                        break;
                    case MicrocodeBank.RAM0:
                        this.microcodeBank[task] = ((nextAddress & 0x100) == 0) ?
                            MicrocodeBank.ROM0 : MicrocodeBank.ROM1;
                        break;
                }
                break;
            case SystemType.THREE_K_RAM:
                if ((nextAddress & 0x100) == 0) {
                    switch (this.microcodeBank[task]) {
                        case MicrocodeBank.ROM0:
                            this.microcodeBank[task] = ((nextAddress & 0x80) == 0) ?
                                MicrocodeBank.RAM0 : MicrocodeBank.RAM2;
                            break;
                        case MicrocodeBank.RAM0:
                        case MicrocodeBank.RAM1:
                            this.microcodeBank[task] = ((nextAddress & 0x80) == 0) ?
                                MicrocodeBank.ROM0 : MicrocodeBank.RAM2;
                            break;
                        case MicrocodeBank.RAM2:
                            this.microcodeBank[task] = ((nextAddress & 0x80) == 0) ?
                                MicrocodeBank.ROM0 : MicrocodeBank.RAM1;
                            break;
                    }
                } else {
                    switch (this.microcodeBank[task]) {
                        case MicrocodeBank.ROM0:
                            this.microcodeBank[task] = ((nextAddress & 0x80) == 0) ?
                                MicrocodeBank.RAM1 : MicrocodeBank.RAM0;
                            break;
                        case MicrocodeBank.RAM0:
                            this.microcodeBank[task] = MicrocodeBank.RAM1;
                            break;
                        case MicrocodeBank.RAM1:
                        case MicrocodeBank.RAM2:
                            this.microcodeBank[task] = MicrocodeBank.RAM0;
                            break;
                    }
                }
                break;
            default:
                throw "Unknown system type " + Configuration.systemType;
        }
    },

    readRam: function () {
        if (!this.ramSelect) {
            throw "Read from microcode RAM not implemented.";
        }

        var data = this.mapRamWord(this.uCodeRam[this.ramAddr + (this.ramBank * 1024)]);

        return (this.lowHalfsel ? data : (data >>> 16)) & 0xffff;
    },

    writeRam: function (low, high) {
        if (!this.ramSelect) {
            // No-op
            return;
        }

        var address = this.ramAddr + (this.ramBank * 1024);
        this.uCodeRam[address] = this.mapRamWord((high << 16) | low);

        this.updateRamCache(address);
    },

    updateRamCache: function (address) {
        var instructionWord = this.uCodeRam[address];
        this.decodeCache[2048 + address] = new MicroInstruction(instructionWord);
    },

    getInstruction: function (address, task) {
        return this.decodeCache[address + this.microcodeBank[task] * 1024];
    },

    mapRamWord: function (word) {
        return (word ^ this.bitMask) & 0xffffffff;
    },

    // Decode and cache microcode
    cacheMicrocodeRom: function () {
        for (var i = 0; i < UROM.length; i++) {
            this.decodeCache[i] = new MicroInstruction(UROM[i]);
        }
    }
};
